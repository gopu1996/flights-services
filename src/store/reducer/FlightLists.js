import * as actionType from "../action/actionType";

const initialState = {
  error: null,
  loading: false,
  flightList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FLIGHT_LIST_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.FLIGHT_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        flightList: action.flightList,
      };
    case actionType.FLIGHT_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_FLIGHT_SHOP_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_FLIGHT_SHOP_DETAILS_SUCCESS:
      let id = action.flightList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        flightList: state.flightList.map((pass) =>
          pass.id === id ? action.flightList : pass
        ),
      };
    case actionType.UPDATE_FLIGHT_SHOP_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_FLIGHT_ANCILLARY_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_FLIGHT_ANCILLARY_DETAILS_SUCCESS:
      let aid = action.flightList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        flightList: state.flightList.map((pass) =>
          pass.id === aid ? action.flightList : pass
        ),
      };
    case actionType.UPDATE_FLIGHT_ANCILLARY_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UPDATE_FLIGHT_MEAL_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.UPDATE_FLIGHT_MEAL_DETAILS_SUCCESS:
      let mid = action.flightList.map((pass) => {
        return pass.id;
      });
      return {
        ...state,
        error: null,
        loading: false,
        flightList: state.flightList.map((pass) =>
          pass.id === mid ? action.flightList : pass
        ),
      };
    case actionType.UPDATE_FLIGHT_MEAL_DETAILS_FAIL:
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
