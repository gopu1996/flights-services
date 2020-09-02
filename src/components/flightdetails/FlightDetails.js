import React, { Suspense } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import SeatTypes from "./SeatType/SeatType";
import UpdatePassengerDetails from "./updatePassenger/UpdatePassengerDetails";
import Aux from "../../hoc/AuxHoc/Auxs";
import AddPassenger from "./AddPassenger/AddPassenger";

const AdditionalServices = React.lazy(() =>
  import("./AdditionalServices/AdditionalServices")
);
const SeatMap = React.lazy(() => import("./SeatType/SeatMap/SeatMap"));
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginTop: "88px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerRight: {
    width: "300px",
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    marginTop: "160px",
  },
  drawerPaperRight: {
    width: "350px",
    marginTop: "153px",
    position: "fixed",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "80px",
  },
}));

const FlightDetails = (props) => {
  const classes = useStyles();
  return (
    <Aux>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{
            backgroundColor: "#1f2c5c",
            flexDirection: "row",
            justifyContent: "center",
            borderBlock: "none",
            alignItems: "center",
          }}
        >
          <Toolbar>
            <div
              style={
                props.userType !== "Admin"
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              <button
                style={{ marginRight: "50px" }}
                type="button"
                className="btn btn-info"
                disabled={props.checkedInPassengerDetails}
                onClick={props.checkedInPassengerDetailsHandler}
              >
                CHECK-IN
              </button>
              <button
                style={{ marginRight: "130px" }}
                type="button"
                className="btn btn-info"
                disabled={!props.checkedInPassengerDetails}
                onClick={props.inFlightPassengerDetailsHandler}
              >
                IN FLIGHT
              </button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <Divider />
            <List>
              <div
                className="form-check"
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="checkedin"
                    onClick={props.filterPassengerHandler}
                  />
                  <span className="label-text">
                    <b>CHECKED IN</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="notcheckedin"
                    onClick={props.filterPassengerHandler}
                  />
                  <span className="label-text">
                    <b>NOT CHECKED IN</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="infant"
                    onClick={props.filterPassengerHandler}
                  />
                  {"        "}
                  <span className="label-text">
                    <b>INFANT</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="wheelchair"
                    onClick={props.filterPassengerHandler}
                  />
                  {"        "}
                  <span className="label-text">
                    <b>WHEELCHAIR</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType !== "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="passport"
                    onClick={props.filterPassengerHandler}
                  />
                  {"        "}
                  <span className="label-text">
                    <b>PASSPORT</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="address"
                    onClick={props.filterPassengerHandler}
                  />
                  {"        "}
                  <span className="label-text">
                    <b>ADDRESS</b>
                  </span>
                </label>
              </div>
              <Divider
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              />
              <div
                className="form-check"
                style={
                  props.userType === "Admin"
                    ? { display: "" }
                    : { display: "none" }
                }
              >
                <label>
                  <input
                    type="checkbox"
                    name="dob"
                    onClick={props.filterPassengerHandler}
                  />
                  {"        "}
                  <span className="label-text">
                    <b>DATE-OF-BIRTH</b>
                  </span>
                </label>
              </div>

              <Divider />
            </List>
          </div>
        </Drawer>
        <Divider />
        <main className={classes.content}>
          <Toolbar />
          <div className="table-responsive-lg">
            <table
              className="table table-hover"
              style={{
                marginTop: "-7px",
                height: "300px ",
                width: "100%",
                marginLeft: "-25px",
                marginRight: "220px",
              }}
            >
              <thead>
                <tr style={{ height: "30px" }}>
                  <th>
                    <b style={{ marginLeft: "30px" }}>Name</b>
                  </th>
                  <th>
                    <b style={{ marginLeft: "-15px" }}>Seat No</b>
                  </th>
                  <th>
                    <b style={{ marginLeft: "-15px" }}>Status</b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b style={{ marginLeft: "-15px" }}>Wheel Chair</b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Infant</b>
                  </th>
                  <th
                    style={
                      props.userType === "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Passport</b>
                  </th>
                  <th
                    style={
                      props.userType === "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Address</b>
                  </th>
                  <th
                    style={
                      props.userType === "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Date-Of-Birth</b>
                  </th>
                  <th
                    style={
                      props.userType === "Admin"
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Actions</b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin" &&
                      props.checkedInPassengerDetails
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b style={{ marginLeft: "15px", color: "black" }}>
                      Check In
                    </b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin" &&
                      props.checkedInPassengerDetails
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b style={{ marginLeft: "19px", color: "black" }}>
                      Offload
                    </b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin" &&
                      !props.checkedInPassengerDetails
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b style={{ marginLeft: "5px" }}>Meal</b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin" &&
                      !props.checkedInPassengerDetails
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Ancillary</b>
                  </th>
                  <th
                    style={
                      props.userType !== "Admin" &&
                      !props.checkedInPassengerDetails
                        ? { display: "" }
                        : { display: "none" }
                    }
                  >
                    <b>Shop</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.passengerDetails.map((passenger, index) => (
                  <tr key={index} style={{ width: "100%" }}>
                    <td>{passenger.first_name + " " + passenger.last_name}</td>
                    <td> {passenger.seat_no}</td>
                    <td>{passenger.status}</td>
                    <td
                      style={
                        props.userType !== "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      {passenger.wheelChair}
                    </td>
                    <td
                      style={
                        props.userType !== "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      {passenger.infant}
                    </td>
                    <td
                      style={
                        props.userType === "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      {passenger.passport}
                    </td>
                    <td
                      style={
                        props.userType === "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      {passenger.address}
                    </td>
                    <td
                      style={
                        props.userType === "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      {passenger.date_of_birth}
                    </td>
                    <td
                      style={
                        props.userType !== "Admin" &&
                        props.checkedInPassengerDetails
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <button
                        className="btn btn-link"
                        style={{ color: "black" }}
                        disabled={passenger.status === "AC"}
                        onClick={() => {
                          props.checkInPassengerHandler(passenger);
                        }}
                      >
                        CHECK IN
                      </button>
                    </td>
                    <td
                      style={
                        props.userType === "Admin"
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <UpdatePassengerDetails
                        className="btn btn-link"
                        style={{ color: "lightblue" }}
                        icon={<i className="fas fa-edit"></i>}
                        passenger={passenger}
                        flightId={props.flight.id}
                        handleUpdatePassengerPersonalInfo={
                          props.handleUpdatePassengerPersonalInfo
                        }
                      />
                    </td>
                    <td
                      style={
                        props.userType !== "Admin" &&
                        props.checkedInPassengerDetails
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <button
                        className="btn btn-link"
                        style={{ color: "black" }}
                        onClick={() => props.offloadPassengerHandler(passenger)}
                        disabled={passenger.status === "NC"}
                      >
                        OFFLOAD
                      </button>
                    </td>
                    <td
                      style={
                        props.userType !== "Admin" &&
                        !props.checkedInPassengerDetails
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <Suspense fallback={<div>Loading....</div>}>
                        <AdditionalServices
                          passengerSpecialServices={passenger.special_meal}
                          flightAdditionalServices={props.flight.special_meals}
                          passenger={passenger}
                          serviceName={"Meal"}
                          flightId={props.flight.id}
                          icon={
                            <i
                              className="fas fa-hamburger"
                              style={{ color: "#7B241C" }}
                            ></i>
                          }
                          handleUpdateExtraServices={(mealItem, passenger) =>
                            props.handleUpdateServicesMeal(mealItem, passenger)
                          }
                        />
                      </Suspense>
                    </td>
                    <td
                      style={
                        props.userType !== "Admin" &&
                        !props.checkedInPassengerDetails
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <Suspense fallback={<div>Loading....</div>}>
                        <AdditionalServices
                          passengerSpecialServices={passenger.ancillary}
                          flightAdditionalServices={props.flight.ancillary}
                          passenger={passenger}
                          serviceName={"Ancillary"}
                          flightId={props.flight.id}
                          icon={
                            <i
                              className="fa fa-tasks"
                              style={{ color: "#59AAD4" }}
                            ></i>
                          }
                          handleUpdateExtraServices={(ancillary, passenger) =>
                            props.handleUpdateServicesAncillary(
                              ancillary,
                              passenger
                            )
                          }
                        />
                      </Suspense>
                    </td>
                    <td
                      style={
                        props.userType !== "Admin" &&
                        !props.checkedInPassengerDetails
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      <Suspense fallback={<div>Loading....</div>}>
                        <AdditionalServices
                          passengerSpecialServices={passenger.flightShop}
                          flightAdditionalServices={props.flight.flightShop}
                          passenger={passenger}
                          flightId={props.flight.id}
                          serviceName={"Shop"}
                          icon={
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                              style={{ color: "#F55944" }}
                            ></i>
                          }
                          handleUpdateExtraServices={(shop, passenger) =>
                            props.handleUpdateServicesShop(shop, passenger)
                          }
                        />
                      </Suspense>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <Drawer
          className={classes.drawerRight}
          variant="permanent"
          classes={{
            paper: classes.drawerPaperRight,
          }}
          anchor="right"
          style={
            props.userType !== "Admin" ? { display: "" } : { display: "none" }
          }
        >
          <div className="container-seat">
            <label>
              <h4
                style={{
                  marginTop: "-1px",
                  marginLeft: "80px",
                  color: "#3b5998",
                  position: "fixed",
                }}
              >
                <u>
                  <b>SEAT TYPES</b>
                </u>
              </h4>
            </label>
            <SeatTypes
              checkedInPassengerDetails={props.checkedInPassengerDetails}
            />
          </div>

          <Toolbar />

          <div style={{ marginTop: "-40px", marginRight: "-10px" }}>
            <Suspense fallback={<div>Loading....</div>}>
              <SeatMap
                seatList={props.seatList}
                seatHandler={props.seatHandler}
                isSeatMapEnabled={props.isSeatMapEnabled}
                gridForCheckin={props.checkedInPassengerDetails}
                gridForInFlight={props.inFlightPassengerDetails}
              />
            </Suspense>
          </div>
        </Drawer>
      </div>
      <div
        style={
          props.userType === "Admin" ? { display: "" } : { display: "none" }
        }
      >
        <AddPassenger
          icon={
            <button
              type="button"
              style={{ width: "600px", marginLeft: "450px" }}
              className="btn btn-info"
            >
              ADD PASSENGER
            </button>
          }
          handleAddPassengerInfo={props.handleAddPassengerInfo}
        />
      </div>
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    flight: state.flightDetails.flight,
    userType: state.auth.userType,
    seatList: state.flightDetails.passengerSeatList,
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(FlightDetails);
