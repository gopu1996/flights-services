import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const AdditionalServices = (props) => {
  const [services, setServices] = useState([props.passengerSpecialServices]);
  React.useEffect(() => {
    setServices(props.passengerSpecialServices);
  }, [props.passengerSpecialServices]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dialogClosedHandler = () => {
    setOpen(false);
    if (services) {
      let additionalServices = services.slice();
      let items = additionalServices.filter((item) => item.trim() !== "");
      setServices(items);
    }
  };

  const handleChange = (event) => {
    let additionalServices = services.slice();
    additionalServices[event.target.id] = event.target.value;
    setServices(additionalServices);
  };
  const addNewMeal = () => {
    let additionalServices = services.slice();
    additionalServices.push("");
    setServices(additionalServices);
  };
  const handleDelete = (event) => {
    let additionalServices = services.slice();
    let deletedItem = additionalServices[event.target.id];
    let items = additionalServices.filter((item) => item !== deletedItem);

    setServices(items);
  };
  let items = [];
  services &&
    services.map((item, index) =>
      items.push(
        <div key={index} className="services" style={{ paddingTop: "15px" }}>
          <input
            autoFocus
            margin="dense"
            label=".Meals"
            id={index}
            type="text"
            value={item}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleDelete}
            id={index}
            style={{
              border: "none",
              backgroundColor: "white",
              marginLeft: "5px",
              color: "red",
              fontSize: "20px",
            }}
          >
            X
          </button>
        </div>
      )
    );
  return (
    <div>
      <button
        id="btn-dialog"
        className="btn btn-link"
        style={{ fontSize: 10 }}
        onClick={handleClickOpen}
      >
        {props.icon}
      </button>

      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={dialogClosedHandler}
        >
          <span
            style={{ position: "absolute", right: "10px", color: "red" }}
            aria-hidden="true"
          >
            &times;
          </span>
        </button>
        <div style={{ color: "black", textAlign: "center" }}>
          <b>{props.serviceName}</b>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.handleUpdateExtraServices(services, props.flightId);
          }}
        >
          <DialogContent>{items}</DialogContent>
          <DialogActions>
            <Button
              onClick={addNewMeal}
              color="primary"
              variant="contained"
              style={{ backgroundColor: "#81c784", fontSize: 10 }}
            >
              Add
            </Button>
            <Button
              onClick={dialogClosedHandler}
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#4a90e2", fontSize: 10 }}
            >
              Save
            </Button>
            <Button
              onClick={dialogClosedHandler}
              color="primary"
              variant="contained"
              style={{ backgroundColor: "#F74F7A", fontSize: 10 }}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AdditionalServices;
