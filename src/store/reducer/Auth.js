import * as actionType from "../action/actionType";

const initialState = {
  token: null,
  id: null,
  firstName: null,
  userType: null,
  error: null,
  loading: false,
  expiredIn: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        id: action.id,
        firstName: action.firstName,
        userType: action.userType,
        expiredIn: action.expiredIn,
      };
    case actionType.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.GOOGLE_LOGIN_DETAIL_ACTION:
      return {
        token: action.token,
        firstName: action.firstName,
        userType: action.userType,
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        id: null,
      };

    default:
      return state;
  }
};
export default reducer;
