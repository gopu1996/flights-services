import * as actionTypes from "./actionType";
import axios from "axios";

export const flightListsStart = () => {
  return {
    type: actionTypes.FLIGHT_LIST_START,
  };
};

export const flightListSuccess = (flightList) => {
  return {
    type: actionTypes.FLIGHT_LIST_SUCCESS,
    flightList,
  };
};

export const flightListsFail = (error) => {
  return {
    type: actionTypes.FLIGHT_LIST_FAIL,
    error: error,
  };
};

export const flightLists = () => {
  return (dispatch) => {
    dispatch(flightListsStart());
    axios
      .get("http://localhost:3004/flightListsJson")
      .then((response) => {
        dispatch(flightListSuccess(response.data));
      })
      .catch((err) => {
        dispatch(flightListsFail("Some Things West Wrong While Fetching "));
      });
  };
};

export const updateFlightShopDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_START,
  };
};

export const updateFlightShopDetailsSuccess = (flightList) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_SUCCESS,
    flightList,
  };
};

export const updateFlightShopDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_FAIL,
    error: error,
  };
};

export const updateFlightShopDetails = (flightId, services, flightList) => {
  return (dispatch) => {
    console.log(services, "uytd");
    dispatch(updateFlightShopDetailsStart());

    axios
      .patch(`http://localhost:3004/flightListsJson/` + flightId, services)
      .then((response) => {
        let updatedPassengerList = flightList.slice();
        console.log(response, updatedPassengerList, services, "uytd");
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === flightId) {
              updatedPassengerList[i].special_meal = response.data.flightShop;
              dispatch(updateFlightShopDetailsSuccess(updatedPassengerList));
            }
          }
        }
      })
      .catch((err) => {
        console.log(err, "sdfgh");
        dispatch(
          updateFlightShopDetailsFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};

export const updateFlightAncillaryDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_START,
  };
};

export const updateFlightAncillaryDetailsSuccess = (flightList) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_SUCCESS,
    flightList,
  };
};

export const updateFlightAncillaryDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_FAIL,
    error: error,
  };
};

export const updateFlightAncillaryDetails = (
  flightId,
  services,
  flightList
) => {
  return (dispatch) => {
    dispatch(updateFlightAncillaryDetailsStart());

    axios
      .patch(`http://localhost:3004/flightListsJson/` + flightId, services)
      .then((response) => {
        let updatedPassengerList = flightList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === flightId) {
              updatedPassengerList[i].special_meal = response.data.ancillary;
              dispatch(updateFlightShopDetailsSuccess(updatedPassengerList));
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updateFlightShopDetailsFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};

export const updateFlightMealsDetailsStart = () => {
  return {
    type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_START,
  };
};

export const updateFlightMealsDetailsSuccess = (flightList) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_SUCCESS,
    flightList,
  };
};

export const updateFlightMealsDetailsFail = (error) => {
  return {
    type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_FAIL,
    error: error,
  };
};

export const updateFlightMealsDetails = (flightId, services, flightList) => {
  return (dispatch) => {
    dispatch(updateFlightMealsDetailsStart());

    axios
      .patch(`http://localhost:3004/flightListsJson/` + flightId, services)
      .then((response) => {
        let updatedPassengerList = flightList.slice();
        if (response) {
          for (let i = 0; i < updatedPassengerList.length; i++) {
            if (updatedPassengerList[i].id === flightId) {
              updatedPassengerList[i].special_meal =
                response.data.special_meals;
              dispatch(updateFlightMealsDetailsSuccess(updatedPassengerList));
            }
          }
        }
      })
      .catch((err) => {
        dispatch(
          updateFlightMealsDetailsFail(
            "Some Things West Wrong While Updating Passenger shop Details "
          )
        );
      });
  };
};
