import React, { useState, useCallback } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";

const UpdatePassengerDetails = (props) => {
  let dateString = props.passenger.date_of_birth;
  let dataSplit = dateString.split("/");
  let dateConverted;
  if (dateConverted === null) {
    dateConverted = "";
  } else if (dataSplit[2].split(" ").length > 1) {
    let pick = dataSplit[2].split(" ")[1].split(":");
    dataSplit[2] = dataSplit[2].split(" ")[0];
    dateConverted = new Date(
      dataSplit[2],
      dataSplit[1] - 1,
      dataSplit[0],
      pick[0],
      pick[1]
    );
  } else {
    dateConverted = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);
  }
  function GetDateFormat(date) {
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return day + "/" + month + "/" + date.getFullYear();
  }

  const [selectedDate, setSelectedDate] = useState(dateConverted);
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstname: props.passenger.first_name,
    lastname: props.passenger.last_name,
    address: props.passenger.address,
    passport: props.passenger.passport,
  });
  React.useEffect(() => {
    setInputValues({
      firstname: props.passenger.first_name,
      lastname: props.passenger.last_name,
      address: props.passenger.address,
      passport: props.passenger.passport,
    });
  }, [props.passenger.id]);

  const handleOnChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dialogClosedHandler = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-link"
        style={{ fontSize: "15px" }}
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
          <b>UPDATE DETAILS</b>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let dateFormat = GetDateFormat(selectedDate);
            props.handleUpdatePassengerPersonalInfo(
              props.passenger.id,
              inputValues.firstname,
              inputValues.lastname,
              dateFormat,
              inputValues.address,
              inputValues.passport
            );
          }}
          className="form-inline"
        >
          <DialogContent>
            <div className="form-group">
              <label for="Flight">Flight No.</label>
              <input type="text" name="flight" value={props.passenger.id} />
            </div>
            <div className="form-group" style={{ marginLeft: "100px" }}>
              <label for="firstname">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                value={inputValues.firstname}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                value={inputValues.lastname}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group" style={{ marginLeft: "100px" }}>
              <label for="dob">Date Of Birth</label>
              <DatePicker
                style={{ borderRadius: "none" }}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                showMonthDropdown
              />
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <label for="email">Passport</label>
              <input
                type="text"
                placeholder="Enter Passport"
                name="passport"
                value={inputValues.passport}
                onChange={handleOnChange}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              <label for="pwd">Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                name="address"
                value={inputValues.address}
                onChange={handleOnChange}
              />
            </div>
          </DialogContent>
          <DialogActions style={{ marginLeft: "200px", marginTop: "10px" }}>
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

export default UpdatePassengerDetails;
