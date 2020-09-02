import * as actionTypes from "./actionType";
import axios from "axios";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, id, firstName, userType, expiredIn) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    id: id,
    firstName: firstName,
    userType: userType,
    expiredIn: expiredIn,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("firstName");
  localStorage.removeItem("userType");
  window.location.reload();
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .get("http://localhost:3004/loginDetailsJson", {
        params: {
          email,
          password,
        },
      })
      .then((response) => {
        dispatch(
          authSuccess(
            response.data[0].token,
            response.data[0].id,
            response.data[0].firstName,
            response.data[0].userType,
            response.data[0].expiredIn
          )
        );
      })
      .catch((err) => {
        dispatch(authFail("Check Your Email Address and Password"));
      });
  };
};

export const googleFacebookLoginDetailAction = (token, firstName, userType) => {
  return {
    type: actionTypes.GOOGLE_LOGIN_DETAIL_ACTION,
    token: token,
    firstName: firstName,
    userType: userType,
  };
};
