import React from "react";

const SeatType = (props) => {
  const checkinPassenger = props.checkedInPassengerDetails;
  return (
    <div
      className="row"
      style={{ width: "310px", position: "fixed", marginTop: "3px" }}
    >
      <div
        className="col"
        style={checkinPassenger ? { display: "" } : { display: "none" }}
      >
        <button className="btn btn-link" disabled={true}>
          <i
            className="fas fa-couch"
            style={{ color: "#B3B6B7", fontSize: "20px", marginLeft: "-10px" }}
          ></i>
        </button>
        <label>Available</label>
      </div>
      <div
        className="col"
        style={checkinPassenger ? { display: "" } : { display: "none" }}
      >
        <button className="btn btn-link" disabled={true}>
          <i
            className="fas fa-couch"
            style={{ color: "red", fontSize: "20px" }}
          ></i>
        </button>
        <label>Booked</label>
      </div>
      <div className="w-100"></div>
      <div
        className="col"
        style={checkinPassenger ? { display: "" } : { display: "none" }}
      >
        <button className="btn btn-link" disabled={true}>
          <i
            className="fas fa-couch"
            style={{ color: "blue", fontSize: "20px", marginLeft: "-10px" }}
          ></i>
        </button>
        <label>WheelChair</label>
      </div>
      <div
        className="col"
        style={checkinPassenger ? { display: "" } : { display: "none" }}
      >
        <button className="btn btn-link" disabled={true}>
          <i
            className="fas fa-couch"
            style={{ color: "orange", fontSize: "20px" }}
          ></i>
        </button>
        <label>Infant</label>
      </div>
      <div
        className="col"
        style={!checkinPassenger ? { display: "" } : { display: "none" }}
      >
        <button className="btn btn-link" disabled={true}>
          <i
            className="fas fa-couch"
            style={{ color: "brown", fontSize: "20px" }}
          ></i>
        </button>
        <label>Meals</label>
      </div>
    </div>
  );
};
export default SeatType;
