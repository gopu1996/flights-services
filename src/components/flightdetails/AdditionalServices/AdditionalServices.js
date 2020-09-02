import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
class AdditionalServices extends Component {
  state = {
    open: false,
    flightServices: this.props.flightAdditionalServices,
    currentService: [],
    updatedService: [],
    passengerServices: this.props.passengerSpecialServices,
  };
  componentDidMount(prevProps, prevState) {
    if (this.state.flightServices && this.state.passengerServices) {
      let flightServiceItem = Array(this.state.flightServices.length).fill(
        false
      );
      for (let i = 0; i < this.state.passengerServices.length; i++) {
        let index = this.state.flightServices.findIndex(
          (item) => this.state.passengerServices[i] === item
        );
        flightServiceItem[index] = true;
      }
      this.setState({ currentService: flightServiceItem });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.flightId !== this.props.flightId) {
      this.setState({
        flightServices: this.props.flightAdditionalServices,
      });
    }
  }

  dialogOpenHandler = () => {
    this.setState({
      open: true,
    });
  };
  saveCloseHandler = () => {
    this.setState({
      open: false,
    });
  };

  dialogClosedHandler = () => {
    this.setState({
      open: false,
    });
  };
  onChangeHandler = (index, item) => (event) => {
    let passengerUpdatedMeal = this.state.currentService.slice();
    let finalSubmit = this.state.passengerServices.slice();
    passengerUpdatedMeal[index] = !passengerUpdatedMeal[index];
    this.setState({ currentService: passengerUpdatedMeal });
    if (passengerUpdatedMeal[index]) {
      finalSubmit.push(item);
    } else {
      finalSubmit = finalSubmit.filter((removeitem) => removeitem !== item);
    }
    this.setState({ passengerServices: finalSubmit });
  };

  render() {
    let items = [];
    if (this.state.flightServices) {
      this.state.flightServices.map((item, index) =>
        items.push(
          <div key={index}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.currentService[index]}
                    onChange={this.onChangeHandler(index, item)}
                    value={item}
                    color="primary"
                    id={index.toString()}
                  />
                }
                label={item}
              />
            </FormGroup>
          </div>
        )
      );
    }
    return (
      <div>
        <button
          id="btn-dialog"
          className="btn btn-link"
          style={{ color: "white" }}
          onClick={this.dialogOpenHandler}
        >
          {this.props.icon}
        </button>

        <Dialog
          open={this.state.open}
          onClose
          aria-labelledby="form-dialog-title"
          disableBackdropClick={true}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.dialogClosedHandler}
          >
            <span
              style={{ position: "absolute", right: "10px", color: "red" }}
              aria-hidden="true"
            >
              &times;
            </span>
          </button>
          <div style={{ color: "black", textAlign: "center" }}>
            <b><u>{this.props.serviceName}</u></b>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.handleUpdateExtraServices(
                this.state.passengerServices,
                this.props.passenger
              );
            }}
          >
            <DialogContent>{items}</DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.saveCloseHandler();
                }}
                type="submit"
                variant="contained"
                style={{ backgroundColor: "4a90e2", fontSize: 10 }}
              >
                Save
              </Button>
              <Button
                onClick={this.dialogClosedHandler}
                color="primary"
                variant="contained"
                style={{ backgroundColor: "81c784", fontSize: 10 }}
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default AdditionalServices;
