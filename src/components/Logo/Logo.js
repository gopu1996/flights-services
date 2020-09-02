import React from "react";
import FlightLogo from "../../assets/images/flight.png";
import "../../sass/main.scss";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={FlightLogo} alt="Flight" />
  </div>
);

export default logo;
