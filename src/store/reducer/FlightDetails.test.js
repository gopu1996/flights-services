import reducer from "./FlightDetails";
import * as actionTypes from "../action/actionType";

describe("Flight details reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
        error: null,
        loading: false,
        passengerList: [],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be  fetching passenger details ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FETCH_PASSENGER_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });


  it("should be store the passenger list in a passenger List array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.FETCH_PASSENGER_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur fetching passenger details ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FETCH_PASSENGER_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be  fetching passenger seat details ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FETCH_SEAT_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be store the passenger seat in a passenger seat array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.FETCH_SEAT_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: ['seat'],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: [],
        passengerSeatList: ['seat'],
        flight: "",
    });
  });

  it("Should be error occur fetching passenger seat details ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FETCH_SEAT_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });
  it("Should be fetching seat for passenger to update in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating passenger seat details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur updating a seat details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_SEAT_IN_PASSENGER_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching seat details to update in passenger seat array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_SEAT_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating  seat details in passenger seat array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: ['seat'],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_SEAT_SUCCESS,
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: ['seat'],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: [],
        passengerSeatList: ['seat'],
        flight: "",
    });
  });

  it("Should be error occur updating a seat details in passenger seat array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_SEAT_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });
  it("Should be fetching flight  details", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FLIGHT_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });
  it("should be store the flight details in a state ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.FLIGHT_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: [],
            passengerSeatList: [],
            flight: "flight",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: [],
        passengerSeatList: [],
        flight: "flight",
    });
  });
  it("Should be error occur fetching a flight details", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.FLIGHT_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching meal details for passenger to update in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_START,
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
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur updating a meals details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_MEAL_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching ancillary details for passenger to update in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating passenger ancillary details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur updating a meals details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_ANCILLARY_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching shop details for passenger to update in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating passenger shop details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur updating a shop details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_SHOP_DETAILS_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("Should be fetching personal info details for passenger to update in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should be updating passenger personal info details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur updating a personal info details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.UPDATE_PASSENGER_PERSONAL_INFO_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });

  it("should be filtering a passenger detail in passenger array ", () => {
    expect(
      reducer(
        {
         
            passengerList: ['passenger'],
          
        },
        {
          type: actionTypes.FILTER_PASSENGER_DETAILS,
           
            passengerList: ['passenger'],
         
        }
      )
    ).toEqual({
      
        passengerList: ['passenger'],
     
    });
  });

  it("Should be details for ading  passenger in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.ADD_PASSENGER_START,
          error: null,
          loading: true,
        }
      )
    ).toEqual({
        error: null,
        loading: true,
    });
  });

  it("should store passenger details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
            passengerList: [], 
            passengerSeatList: [],
            flight: "",
        },
        {
          type: actionTypes.ADD_PASSENGER_SUCCESS,
            error: null,
            loading: false,
            passengerList: ['passenger'],
            passengerSeatList: [],
            flight: "",
        }
      )
    ).toEqual({
        error: null,
        loading: false,
        passengerList: ['passenger'],
        passengerSeatList: [],
        flight: "",
    });
  });

  it("Should be error occur adding a passenger details in passenger list array ", () => {
    expect(
      reducer(
        {
            error: null,
            loading: false,
        },
        {
          type: actionTypes.ADD_PASSENGER_FAIL,
          error: "error",
          loading: false,
        }
      )
    ).toEqual({
        error: "error",
        loading: false,
    });
  });


});
