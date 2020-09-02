import * as actionTypes from "./actionType";
import axios from "axios";

export const flightPassengerDetailsStart = () => {
  return {
    type: actionTypes.FETCH_PASSENGER_DETAILS_START,
  };
};

export const flightPassengerDetailsSuccess = (passengerList) => {
  return {
    type: actionTypes.FETCH_PASSENGER_DETAILS_SUCCESS,
    passengerList,
  };
};

export const filterPassengerDetails = (passengerList) => {
  return {
    type: actionTypes.FILTER_PASSENGER_DETAILS,
    passengerList,
  };
};

export const flightPassengerDetailsFail = (error) => {
  return {
    type: actionTypes.FETCH_PASSENGER_DETAILS_FAIL,
    error: error,
  };
};

export const flightPassengerDetails = (passFlightId) => {
  return (dispatch) => {
    dispatch(flightPassengerDetailsStart());
    axios
      .get("http://localhost:3004/PassengerDetailsJson", {
        params: {
          paxFlightId: passFlightId,
        },
      })
      .then((response) => {
        dispatch(flightPassengerDetailsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(
          flightPassengerDetailsFail(
            "Some Things West Wrong While Fetching Passenger Details "
          )
        );
      });
  };
};

export const flightSeatDetailsStart = () => {
  return {
    type: actionTypes.FETCH_SEAT_DETAILS_FAIL,
  };
};

export const flightSeatrDetailsSuccess = (passengerSeatList) => {
  return {
    type: actionTypes.FETCH_SEAT_DETAILS_SUCCESS,
    passengerSeatList,
  };
};

export const flightSeatDetailsFail = (error) => {
  return {
    type: actionTypes.FETCH_SEAT_DETAILS_FAIL,
    error: error,
  };
};

export const flightSeatDetails = (passFlightId) => {
  return (dispatch) => {
    dispatch(flightSeatDetailsStart());
    axios
      .get("http://localhost:3004/seat")
      .then((response) => {
          dispatch(flightSeatrDetailsSuccess(response.data)); 
      })
      .catch((err) => {
        dispatch(
          flightSeatDetailsFail(
            "Some Things West Wrong While Fetching Passenger Seat Details "
          )
        );
      });
  };
};

export const updateSeatDetailsInPassengerDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_START,
  };
};

export const updateSeatDetailsInPassengerDetailsSuccess = (passengerList) => {
  return {
    type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_SUCCESS,
    passengerList,
  };
};

export const updateSeatDetailsInPassengerDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_FAIL,
    error: error,
  };
};

export const updateSeatDetailsInPassengerDetails = (
  passId,
  seatDeatil,
  passengerList
) => {
  return (dispatch) => {
    dispatch(updateSeatDetailsInPassengerDetailsStart());
    axios
      .patch("http://localhost:3004/PassengerDetailsJson/" + passId, seatDeatil)
      .then((response) => {
        let updatedPassengerList = passengerList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === passId) {
              updatedPassengerList[i].status = response.data.status;
              updatedPassengerList[i].seat_no = response.data.seat_no;
              dispatch(
                updateSeatDetailsInPassengerDetailsSuccess(updatedPassengerList)
              );
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updateSeatDetailsInPassengerDetailsFail(
            "Some Things West Wrong While Updating Passenger passenger Details "
          )
        );
      });
  };
};

export const updateSeatDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_SEAT_START,
  };
};

export const updateSeatrDetailsSuccess = (passengerSeatList) => {
  return {
    type: actionTypes.UPDATE_SEAT_SUCCESS,
    passengerSeatList,
  };
};

export const updateSeatDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_SEAT_FAIL,
    error: error,
  };
};

export const updateSeatDetails = (seatId, seat, seatList) => {
  return (dispatch) => {
    dispatch(updateSeatDetailsStart());
    axios
      .patch("http://localhost:3004/seat/" + seatId, seat)
      .then((response) => {
        if (response) {
          let updatedPassengerList = seatList.slice();
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === seatId) {
              updatedPassengerList[i].paxId = response.data.passengerId;
              updatedPassengerList[i].wheelChairId = response.data.wheelChairId;
              updatedPassengerList[i].infantId = response.data.infantId;
              updatedPassengerList[i].mealId = response.data.mealId;
              dispatch(updateSeatrDetailsSuccess(updatedPassengerList));
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updateSeatDetailsFail(
            "Some Things West Wrong While updating  Seat Details "
          )
        );
      });
  };
};
export const flightDetailsStart = () => {
  return {
    type: actionTypes.FLIGHT_DETAILS_START,
  };
};

export const flightDetailsSuccess = (flight) => {
  return {
    type: actionTypes.FLIGHT_DETAILS_SUCCESS,
    flight,
  };
};

export const flightDetailsFail = (error) => {
  return {
    type: actionTypes.FLIGHT_DETAILS_FAIL,
    error: error,
  };
};

export const flightDetails = (flightId) => {
  return (dispatch) => {
    dispatch(flightDetailsStart());
    axios
      .get("http://localhost:3004/flightListsJson", {
        params: {
          paxFlightId: flightId,
        },
      })
      .then((response) => {
          dispatch(flightDetailsSuccess(response.data[0]));
      })
      .catch((err) => {
        dispatch(
          flightDetailsFail(
            "Some Things West Wrong While Fetching Flights Details "
          )
        );
      });
  };
};

export const updatePassengerMealsDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_START,
  };
};

export const updatePassengerMealsDetailsSuccess = (passengerList) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_SUCCESS,
    passengerList,
  };
};

export const updatePassengerMealsDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_FAIL,
    error: error,
  };
};

export const updateMealsDetails = (passId, PassengerDetails, passengerList) => {
  return (dispatch) => {
    dispatch(updateSeatDetailsInPassengerDetailsStart());
    axios
      .patch(
        "http://localhost:3004/PassengerDetailsJson/" + passId,
        PassengerDetails
      )
      .then((response) => {
        let updatedPassengerList = passengerList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === passId) {
              updatedPassengerList[i].special_meal = response.data.special_meal;
              dispatch(
                updatePassengerMealsDetailsSuccess(updatedPassengerList)
              );
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updatePassengerMealsDetailsFail(
            "Some Things West Wrong While Updating Passenger Meals Details "
          )
        );
      });
  };
};

export const updatePassengerAcnillaryDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_START,
  };
};

export const updatePassengerAncillaryDetailsSuccess = (passengerList) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_SUCCESS,
    passengerList,
  };
};

export const updatePassengerAncillaryDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_FAIL,
    error: error,
  };
};

export const updateAncillaryDetails = (
  passId,
  PassengerDetails,
  passengerList
) => {
  return (dispatch) => {
    dispatch(updatePassengerAcnillaryDetailsStart());
    axios
      .patch(
        "http://localhost:3004/PassengerDetailsJson/" + passId,
        PassengerDetails
      )
      .then((response) => {
        let updatedPassengerList = passengerList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === passId) {
              updatedPassengerList[i].special_meal = response.data.ancillary;
              dispatch(
                updatePassengerAncillaryDetailsSuccess(updatedPassengerList)
              );
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updatePassengerAncillaryDetailsFail(
            "Some Things West Wrong While Updating Passenger ancillary Details "
          )
        );
      });
  };
};

export const updatePassengerShopDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_START,
  };
};

export const updatePassengerShopDetailsSuccess = (passengerList) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_SUCCESS,
    passengerList,
  };
};

export const updatePassengerShopDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_FAIL,
    error: error,
  };
};

export const updateShopDetails = (passId, PassengerDetails, passengerList) => {
  return (dispatch) => {
    dispatch(updatePassengerShopDetailsStart());
    axios
      .patch(
        "http://localhost:3004/PassengerDetailsJson/" + passId,
        PassengerDetails
      )
      .then((response) => {
        let updatedPassengerList = passengerList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === passId) {
              updatedPassengerList[i].special_meal = response.data.flightShop;
              dispatch(updatePassengerShopDetailsSuccess(updatedPassengerList));
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updatePassengerShopDetailsFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};

export const updatePassengerPersonalInfoStart = () => {
  return {
    type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_START,
  };
};

export const updatePassengerPersonalInfoSuccess = (passengerList) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_SUCCESS,
    passengerList,
  };
};

export const updatePassengerPersonalInfoFail = (error) => {
  return {
    type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_FAIL,
    error: error,
  };
};

export const updatePassengerPersonalInfo = (
  passId,
  PassengerDetails,
  passengerList
) => {
  return (dispatch) => {
    dispatch(updatePassengerPersonalInfoStart());
    axios
      .patch(
        "http://localhost:3004/PassengerDetailsJson/" + passId,
        PassengerDetails
      )
      .then((response) => {
        let updatedPassengerList = passengerList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === passId) {
              updatedPassengerList[i].first_name = response.data.first_name;
              updatedPassengerList[i].last_name = response.data.last_name;
              updatedPassengerList[i].date_of_birth =
                response.data.date_of_birth;
              updatedPassengerList[i].address = response.data.address;
              updatedPassengerList[i].passport = response.data.passport;
              dispatch(
                updatePassengerPersonalInfoSuccess(updatedPassengerList)
              );
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updatePassengerPersonalInfoFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};

export const addPassengerStart = () => {
  return {
    type: actionTypes.ADD_PASSENGER_START,
  };
};

export const addPassengerSuccess = (passengerList) => {
  console.log(passengerList, " action");
  return {
    type: actionTypes.ADD_PASSENGER_SUCCESS,
    passengerList,
  };
};

export const addPassengerFail = (error) => {
  return {
    type: actionTypes.ADD_PASSENGER_FAIL,
    error: error,
  };
};

export const addPassenger = (obj, passengerList) => {
  return (dispatch) => {
    dispatch(addPassengerStart());
    axios
      .post(`http://localhost:3004/PassengerDetailsJson/`, obj)
      .then((response) => {
        if (response) {
          let updatedPassengerList = passengerList.slice();
          updatedPassengerList.push(response.data);
          dispatch(addPassengerSuccess(updatedPassengerList));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          addPassengerFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};
