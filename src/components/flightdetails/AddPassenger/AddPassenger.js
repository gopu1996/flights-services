import React, { useState, useCallback } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
import { withRouter } from "react-router";

const AddPassenger = (props) => {
  function GetDateFormat(date) {
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return day + "/" + month + "/" + date.getFullYear();
  }

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState("Male");
  const [wheelChair, setWheelChair] = useState("No");
  const [infants, setInfants] = useState("No");
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    address: "",
    passport: "",
  });

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
        style={{ fontSize: 10 }}
        onClick={handleClickOpen}
        id="btn-dialog"
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
            props.handleAddPassengerInfo(
              props.match.params.passFlightId,
              inputValues.firstname,
              inputValues.lastname,
              dateFormat,
              gender,
              wheelChair,
              infants,
              inputValues.mobile,
              inputValues.email,
              inputValues.address,
              inputValues.passport
            );
          }}
          className="form-inline"
        >
          <DialogContent style={{ marginLeft: "50px" }}>
            <div className="form-group">
              <label for="Flight">FLIGHT No.</label>
              <input
                type="text"
                name="flight"
                value={props.match.params.passFlightId}
              />
            </div>
            <div className="form-group" style={{ marginLeft: "100px" }}>
              <label for="firstname">FIRST NAME</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                value={inputValues.firstname}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <label for="lastname">LAST NAME</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                value={inputValues.lastname}
                onChange={handleOnChange}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              <label for="dob">DATE OF BIRTH</label>
              <DatePicker
                style={{ borderRadius: "None" }}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                showMonthDropdown
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "20px", marginTop: "10px" }}
            >
              <label for="firstname">GENDER</label>
              <div className="form-check" style={{ marginLeft: "-15px" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  label="Male"
                  checked={gender === "Male"}
                  value="Male"
                  onClick={() => setGender("Male")}
                />
                <label className="form-check-label" for="Male">
                  MALE
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  label="Female"
                  checked={gender === "Female"}
                  value="Male"
                  onClick={() => setGender("Female")}
                />
                <label className="form-check-label" for="Female">
                  FEMALE
                </label>
              </div>
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "90px", marginTop: "10px" }}
            >
              <label for="firstname">WHEEL CHAIR</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={wheelChair === "YES"}
                  value="Male"
                  onClick={() => setWheelChair("YES")}
                />
                <label className="form-check-label" for="YES">
                  YES
                </label>
              </div>
              <div className="form-check" style={{ marginLeft: "-5px" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  checked={wheelChair === "No"}
                  value="No"
                  onClick={() => setWheelChair("No")}
                />
                <label className="form-check-label" for="No">
                  No
                </label>
              </div>
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "70px", marginTop: "10px" }}
            >
              <label for="firstname">INFANTS</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={infants === "YES"}
                  value="YES"
                  onClick={() => setInfants("YES")}
                />
                <label className="form-check-label" for="YES">
                  YES
                </label>
              </div>
              <div className="form-check" style={{ marginLeft: "-5px" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  checked={infants === "No"}
                  value="No"
                  onClick={() => setInfants("No")}
                />
                <label className="form-check-label" for="No">
                  No
                </label>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <label for="email">MOBILE</label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                name="mobile"
                value={inputValues.mobile}
                onChange={handleOnChange}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              <label for="email">EMAIL</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputValues.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <label for="email">PASSPORT</label>
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
              <label for="pwd">ADDRESS</label>
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

export default withRouter(AddPassenger);
