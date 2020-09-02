import reducer from "./FlightLists";
import * as actionTypes from "../action/actionType";

describe("Flight list reducer", () => {
  
    it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
        error: null,
        loading: false,
        flightList: [],
    });
  });

  it("Should be  fetching flight list ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FLIGHT_LIST_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });


  it("should be store the flight list in a flight List array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            flightList: [],
        },
        {
          type: actionTypes.FLIGHT_LIST_SUCCESS,
          error: null,
          loading: false,
          flightList: ['flight'],
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        flightList: ['flight'],
    });
  });

  it("Should be error occur fetching flights  details ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FLIGHT_LIST_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  })
  
  it("Should be fetching meal details for flight to update in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating passenger meals details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            flightList: ['flight'],
        },
        {
          type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_SUCCESS,
          error: null,
          loading: false,
          flightList: ['flight'],
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        flightList: ['flight'],
    });
  });

  it("Should be error occur updating a meals details in Flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_MEAL_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching ancillary details for flight to update in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating flight ancillary details in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            flightList: ['flight'],
        },
        {
          type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_SUCCESS,
          error: null,
          loading: false,
          flightList: ['flight'],
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        flightList: ['flight'],
    });
  });

  it("Should be error occur updating a ancillary details in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_ANCILLARY_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching shop details for flight to update in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating flight shop details in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            flightList: ['flight'],
        },
        {
          type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_SUCCESS,
          error: null,
          loading: false,
          flightList: ['flight'],
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        flightList: ['flight'],
    });
  });

  it("Should be error occur updating a shop details in flight list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_FLIGHT_SHOP_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

})
