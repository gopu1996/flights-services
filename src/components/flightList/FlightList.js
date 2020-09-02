import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AdditionalServices from "./AdditionalServices/AdditionalServices";

const FlightList = (props) => {
  return (
    <div id="table" className="table-responsive-lg">
      <table
        className="table table-hover"
        style={{
          marginTop: "90px",
          height: "200px ",
          width: "100%",
        }}
      >
        <thead>
          <tr style={{ height: "30px" }}>
            <th>
              <b style={{ marginLeft: "40px" }}>Airlines</b>
            </th>
            <th>
              <b>Flight no</b>
            </th>
            <th>
              <b>Arrival</b>
            </th>
            <th>
              <b>Departure</b>
            </th>
            <th>
              <b>Arrival Date</b>
            </th>
            <th>
              <b>Departure Date</b>
            </th>
            <th
              style={
                props.userType === "Admin"
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              <b>Meal</b>
            </th>
            <th
              style={
                props.userType === "Admin"
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              <b>Ancillary</b>
            </th>
            <th
              style={
                props.userType === "Admin"
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              <b>Flight-Shop</b>
            </th>
            <th>
              <b>Flight Details</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.flightLists.map((flight) => (
            <tr key={flight.flightNo} style={{ width: "100%" }}>
              <td>
                <i
                  className="fa fa-plane icon-4x"
                  aria-hidden="true"
                  style={{ fontSize: "1em" }}
                ></i>
                {flight.airline}
              </td>
              <td> {flight.flightNo}</td>
              <td>{flight.departureStation}</td>
              <td>{flight.arrivalStation}</td>
              <td>{flight.departureDate}</td>
              <td>{flight.arrivalDate}</td>
              <td
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <AdditionalServices
                  passengerSpecialServices={flight.special_meals}
                  flightAdditionalServices={props.flight.special_meals}
                  passenger={flight}
                  serviceName={"Meal"}
                  flightId={flight.id}
                  icon={
                    <i
                      className="fas fa-hamburger"
                      style={{ color: "#7B241C" }}
                    ></i>
                  }
                  handleUpdateExtraServices={(services, flightId) =>
                    props.handleUpdateServicesMeal(services, flightId)
                  }
                />
              </td>
              <td
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <AdditionalServices
                  passengerSpecialServices={flight.ancillary}
                  flightAdditionalServices={props.flight.ancillary}
                  passenger={flight}
                  serviceName={"Ancillary"}
                  flightId={flight.id}
                  icon={
                    <i
                      className="fa fa-tasks"
                      aria-hidden="true"
                      style={{ color: "#59AAD4" }}
                    ></i>
                  }
                  handleUpdateExtraServices={(services, flightId) =>
                    props.handleUpdateServicesAncillary(services, flightId)
                  }
                />
              </td>
              <td
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <AdditionalServices
                  passengerSpecialServices={flight.flightShop}
                  flightAdditionalServices={props.flight.flightShop}
                  passenger={flight}
                  flightId={flight.id}
                  serviceName={"Shop"}
                  icon={
                    <i
                      className="fa fa-shopping-cart"
                      aria-hidden="true"
                      style={{ color: "#F55944" }}
                    ></i>
                  }
                  handleUpdateExtraServices={(services, flightId) =>
                    props.handleUpdateServicesShop(services, flightId)
                  }
                />
              </td>
              <td>
                <Link to={"/flightdetails/" + flight.paxFlightId}>
                  <button className="btn btn-link" style={{ color: "black" }}>
                    Flight Detail
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    flight: state.flightDetails.flight,
    loading: state.flightLists.loading,
    error: state.flightLists.error,
    userType: state.auth.userType,
    seatList: state.flightDetails.passengerSeatList,
  };
};
export default connect(mapStateToProps)(FlightList);
