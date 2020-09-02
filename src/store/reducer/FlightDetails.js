import * as actionType from "../action/actionType";

const initialState = {
  error: null,
  loading: false,
  passengerList: [],
  passengerSeatList: [],
  flight: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PASSENGER_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.FETCH_PASSENGER_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: action.passengerList,
      };
    case actionType.FETCH_PASSENGER_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.FETCH_SEAT_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.FETCH_SEAT_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        passengerSeatList: action.passengerSeatList,
      };
    case actionType.FETCH_SEAT_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_SEAT_IN_PASSENGER_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_SEAT_IN_PASSENGER_DETAILS_SUCCESS:
      let id = action.passengerList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: state.passengerList.map((pass) =>
          pass.id === id ? action.passengerList : pass
        ),
      };
    case actionType.UPDATE_SEAT_IN_PASSENGER_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_SEAT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_SEAT_SUCCESS:
      let sid = action.passengerSeatList.map((seat) => {
        return seat.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerSeatList: state.passengerSeatList.map((seat) =>
          seat.id === sid ? action.passengerSeatList : seat
        ),
      };
    case actionType.UPDATE_SEAT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.FLIGHT_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.FLIGHT_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        flight: action.flight,
      };
    case actionType.FLIGHT_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_PASSENGER_MEAL_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_PASSENGER_MEAL_DETAILS_SUCCESS:
      let pid = action.passengerList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: state.passengerList.map((pass) =>
          pass.id === pid ? action.passengerList : pass
        ),
      };
    case actionType.UPDATE_PASSENGER_MEAL_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_PASSENGER_ANCILLARY_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_PASSENGER_ANCILLARY_DETAILS_SUCCESS:
      let paid = action.passengerList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: state.passengerList.map((pass) =>
          pass.id === paid ? action.passengerList : pass
        ),
      };
    case actionType.UPDATE_PASSENGER_ANCILLARY_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_PASSENGER_SHOP_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_PASSENGER_SHOP_DETAILS_SUCCESS:
      let psid = action.passengerList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: state.passengerList.map((pass) =>
          pass.id === psid ? action.passengerList : pass
        ),
      };
    case actionType.UPDATE_PASSENGER_SHOP_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_PASSENGER_PERSONAL_INFO_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_PASSENGER_PERSONAL_INFO_SUCCESS:
      let pInfoid = action.passengerList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: state.passengerList.map((pass) =>
          pass.id === pInfoid ? action.passengerList : pass
        ),
      };
    case actionType.UPDATE_PASSENGER_PERSONAL_INFO_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionType.FILTER_PASSENGER_DETAILS:
      return {
        ...state,
        passengerList:
          state.passengerList.length === action.passengerList
            ? state.passengerList
            : action.passengerList,
      };
    case actionType.ADD_PASSENGER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.ADD_PASSENGER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        passengerList: action.passengerList,
      };
    case actionType.ADD_PASSENGER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
