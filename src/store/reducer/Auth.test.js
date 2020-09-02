import reducer from "./Auth";
import * as actionTypes from "../action/actionType";


describe("auth reducer", () => {
 
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      id: null,
      firstName: null,
      userType: null,
      error: null,
      loading: false,
      expiredIn: null,
    });
  });
  it("Starting a authentication", () => {
    expect(
      reducer(
        {
          error: null,
         loading: false,
        },
        {
        type: actionTypes.AUTH_START,
        error: null,
        loading: true,
        }
      )
    ).toEqual({
         error: null,
        loading: true,
    });
  });
  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          id: null,
          firstName: null,
          userType: null,
          error: null,
          loading: false,
          expiredIn: null,
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          token: "some-token",
          id: "some-user-id",
          firstName: "name",
          userType: "type",
          expiredIn: 3600,
        }
      )
    ).toEqual({
      token: "some-token",
      id: "some-user-id",
      firstName: "name",
      userType: "type",
      error: null,
      loading: false,
      expiredIn: 3600,
    });
  });
  it("Should error facing in authentication", () => {
    expect(
      reducer(
        {
          error: null,
         loading: false,
        },
        {
        type: actionTypes.AUTH_FAIL,
        error: "error",
        loading: false,
        }
      )
    ).toEqual({
      error: "error",
      loading: false,
    });
  });
  it("should store the token upon Google login", () => {
    expect(
      reducer(
        {
          token: null,
          id: null,
          firstName: null,
          userType: null,
          error: null,
          loading: false,
          expiredIn: null,
        },
        {
        type:actionTypes.GOOGLE_LOGIN_DETAIL_ACTION,
        token: "token",
        firstName: "firstName",
        userType: "userType",
        }
      )
    ).toEqual({
      token: "token",
      firstName: "firstName",
      userType: "userType",
    });
  });
  it("should be Logout from application", () => {
    expect(
      reducer(
        {
          token: null,
          id: null,
        },
        {
        type:actionTypes.AUTH_LOGOUT,
        token: null,
        id: null,
        }
      )
    ).toEqual({
      token: null,
      id: null,
    });
  });
});
