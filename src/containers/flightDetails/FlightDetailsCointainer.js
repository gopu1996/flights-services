import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../store/action/index";
import { Redirect } from "react-router-dom";
import FlightDetailsComponent from "../../components/flightdetails/FlightDetails";

class FlightDetailsCointainer extends Component {
  state = {
    allPassengerDetails: [],
    isPassengerCheckedIn: false,
    isPassengerNotCheckedIn: false,
    isPassengerWheelChair: false,
    isPassengerInfant: false,
    isPassengerPassport: false,
    isPassengerDOB: false,
    isPassengerAddress: false,
    checkedInPassengerDetails: false,
    inFlightPassengerDetails: false,
    passengerSeat: "",
    isSeatMapEnabled: false,
    passengerFlightId: this.props.match.params.passFlightId,
  };
  componentDidMount() {
    this.props.onPassengerDetailsLists(this.props.match.params.passFlightId);
    this.setState({
      allPassengerDetails: this.props.passengerDetails,
    });
    this.props.seatListsDetails();
    this.props.onFlightFetch(this.props.match.params.passFlightId);
  }
  componentDidUpdate(prevsProps, prevsState) {
    if (this.props.passengerDetails.length && this.state.allPassengerDetails.length) {
      if (
        this.props.passengerDetails[0].paxFlightId !==
          this.state.allPassengerDetails[0].paxFlightId ||
        this.props.passengerDetails.length >
          this.state.allPassengerDetails.length
      ) {
        this.props.onPassengerDetailsLists(
          this.props.match.params.passFlightId
        );
        this.setState({
          allPassengerDetails: this.props.passengerDetails,
        });
        this.props.seatListsDetails();
        this.props.onFlightFetch(this.props.match.params.passFlightId);
      }
    } else if (prevsProps.passengerDetails.length === null) {
      this.props.onPassengerDetailsLists(this.props.match.params.passFlightId);
      this.setState({
        allPassengerDetails: this.props.passengerDetails,
      });
      this.props.seatListsDetails();
      this.props.onFlightFetch(this.props.match.params.passFlightId);
    }
  }

  filterPassengerHandler = (event) => {
    let checkIn = this.state.isPassengerCheckedIn;
    let notCheckIn = this.state.isPassengerNotCheckedIn;
    let wheelchair = this.state.isPassengerWheelChair;
    let infant = this.state.isPassengerInfant;
    let passport = this.state.isPassengerPassport;
    let dob = this.state.isPassengerDOB;
    let address = this.state.isPassengerAddress;

    if (event.target.name === "checkedin") {
      this.setState((prev) => {
        return { isPassengerCheckedIn: !prev.isPassengerCheckedIn };
      });
      checkIn = !this.state.isPassengerCheckedIn;
    }
    if (event.target.name === "notcheckedin") {
      this.setState((prev) => {
        return { isPassengerNotCheckedIn: !prev.isPassengerNotCheckedIn };
      });
      notCheckIn = !this.state.isPassengerNotCheckedIn;
    }
    if (event.target.name === "wheelchair") {
      this.setState((prev) => {
        return { isPassengerWheelChair: !prev.isPassengerWheelChair };
      });
      wheelchair = !this.state.isPassengerWheelChair;
    }
    if (event.target.name === "infant") {
      this.setState((prev) => {
        return { isPassengerInfant: !prev.isPassengerInfant };
      });
      infant = !this.state.isPassengerInfant;
    }
    if (event.target.name === "passport") {
      this.setState((prev) => {
        return { isPassengerPassport: !prev.isPassengerPassport };
      });
      passport = !this.state.isPassengerPassport;
    }
    if (event.target.name === "dob") {
      this.setState((prev) => {
        return { isPassengerDOB: !prev.isPassengerDOB };
      });
      dob = !this.state.isPassengerDOB;
    }
    if (event.target.name === "address") {
      this.setState((prev) => {
        return { isPassengerAddress: !prev.isPassengerAddress };
      });
      address = !this.state.isPassengerAddress;
    }
    let filterPassengerList = [];
    if (checkIn) {
      filterPassengerList = this.state.allPassengerDetails.filter(
        (passenger) => passenger.status === "AC"
      );
    } else {
      filterPassengerList = this.state.allPassengerDetails;
    }
    if (notCheckIn) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.status === "NC"
      );
    }
    if (wheelchair) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.wheelChair === "YES"
      );
    }
    if (infant) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.infant === "YES"
      );
    }
    if (passport) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.passport === ""
      );
    }
    if (dob) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.date_of_birth === ""
      );
    }
    if (address) {
      filterPassengerList = filterPassengerList.filter(
        (passenger) => passenger.address === ""
      );
    }

    this.props.onFilterPassenger(filterPassengerList);
  };

  checkedInPassengerDetailsHandler = () => {
    this.setState({
      checkedInPassengerDetails: true,
    });
  };

  inFlightPassengerDetailsHandler = () => {
    this.setState({
      checkedInPassengerDetails: false,
      inFlightPassengerDetails: true,
    });
  };

  checkInPassengerHandler = (passenger) => {
    this.setState({ passengerSeat: passenger, isSeatMapEnabled: true });
  };

  offloadPassengerHandler = (passenger) => {
    const passengerId = passenger.id;
    const passengerDetails = {
      seat_no: "",
      status: "NC",
    };
    this.props.onUpdateSeatDetailsInPassengerDetails(
      passengerId,
      passengerDetails,
      this.props.passengerDetails
    );
    let updatedPassengerList = this.props.seatLists.slice();
    let seatId = 0;
    for (let i = 0; i < updatedPassengerList.length; i++) {
      if (updatedPassengerList[i].seatNo === passenger.seat_no) {
        seatId = updatedPassengerList[i].id;
      }
    }
    const seat = {
      passengerId: 0,
      wheelChairId: 0,
      infantId: 0,
      mealId: 0,
    };
    this.props.onUpdateSeatDetails(seatId, seat, this.props.seatLists);
    this.setState({
      passenger: "",
      allPassengerDetails: this.props.passengerDetails,
    });
  };

  seatHandler = (seatDetails) => {
    const passengerId = this.state.passengerSeat.id;
    if (seatDetails.passengerId === 0) {
      this.setState({ isSeatAssigned: true });
    }
    const seatDetail = {
      seat_no: seatDetails.seatNo,
      status: "AC",
    };

    this.props.onUpdateSeatDetailsInPassengerDetails(
      passengerId,
      seatDetail,
      this.props.passengerDetails
    );
    const seatId = seatDetails.id;
    let wheelChair = 0;
    let infant = 0;
    let meal = 0;

    if (this.state.passengerSeat.wheelChair === "YES") {
      wheelChair = this.state.passengerSeat.id;
    }
    if (this.state.passengerSeat.infant === "YES") {
      infant = this.state.passengerSeat.id;
    }
    if (this.state.passengerSeat.special_meal.length > 0) {
      meal = this.state.passengerSeat.id;
    }
    const seat = {
      passengerId: this.state.passengerSeat.id,
      wheelChairId: wheelChair,
      infantId: infant,
      mealId: meal,
    };
    this.props.onUpdateSeatDetails(seatId, seat, this.props.seatLists);
    this.setState({
      allPassengerDetails: this.props.passengerDetails,
      passengerSeat: "",
      isSeatMapEnabled: false,
    });
  };

  handleUpdateServicesMeal = (Services, passenger) => {
    let passId = passenger.id;
    const PassengerDetails = {
      special_meal: Services,
    };
    this.props.onUpdateMeals(
      passId,
      PassengerDetails,
      this.props.passengerDetails
    );
    let seatMealList = this.props.seatLists.slice();
    let seatNoOfPassenger = passenger.seat_no;
    let seatPassenger = "";

    for (let i = 0; i < seatMealList.length; i++) {
      if (seatNoOfPassenger === seatMealList[i].seatNo) {
        seatPassenger = seatMealList[i];
      }
    }
    let seat = "";
    let seatId = seatPassenger.id;
    if (Services.length > 0) {
      seat = {
        mealId: passenger.id,
      };
    } else {
      seat = {
        mealId: 0,
      };
    }
    this.props.onUpdateSeatDetails(seatId, seat, this.props.seatLists);
  };

  handleUpdateServicesAncillary = (Services, passenger) => {
    let passId = passenger.id;
    const PassengerDetails = {
      ancillary: Services,
    };
    this.props.onUpdateAncillary(
      passId,
      PassengerDetails,
      this.props.passengerDetails
    );
  };

  handleUpdateServicesShop = (Services, passenger) => {
    let passId = passenger.id;
    const PassengerDetails = {
      flightShop: Services,
    };
    this.props.onUpdateShop(
      passId,
      PassengerDetails,
      this.props.passengerDetails
    );
  };

  handleUpdatePassengerPersonalInfo = (
    id,
    firstname,
    lastname,
    date_of_birth,
    address,
    passport
  ) => {
    let obj = {
      first_name: firstname,
      last_name: lastname,
      date_of_birth: date_of_birth,
      address: address,
      passport: passport,
    };

    this.props.onUpdatePersonalInfo(id, obj, this.props.passengerDetails);
  };

  handleAddPassengerInfo = (
    flightId,
    firstname,
    lastname,
    dob,
    gender,
    wheelChair,
    infants,
    mobile,
    email,
    address,
    passport
  ) => {
    let obj = {
      paxFlightId: flightId,
      first_name: firstname,
      last_name: lastname,
      date_of_birth: dob,
      address: address,
      email_id: email,
      mobile_no: mobile,
      gender: gender,
      seat_no: "",
      travel_document: "{}",
      wheelChair: wheelChair,
      infant: infants,
      status: "NC",
      special_meal: [],
      ancillary: [],
      flightShop: [],
      passport: passport,
    };
    this.props.onAddPassenger(obj, this.props.passengerDetails);
  };

  render() {

    let authRedirect = null;
    if (!this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }

    return (
      <div className="flight">
        {authRedirect}
        <FlightDetailsComponent
          passengerDetails={this.props.passengerDetails}
          isSeatMapEnabled={this.state.isSeatMapEnabled}
          filterPassengerHandler={this.filterPassengerHandler.bind(this)}
          checkedInPassengerDetails={this.state.checkedInPassengerDetails}
          inFlightPassengerDetails={this.state.inFlightPassengerDetails}
          passengerFlightId={this.state.passengerFlightId}
          checkedInPassengerDetailsHandler={
            this.checkedInPassengerDetailsHandler
          }
          inFlightPassengerDetailsHandler={this.inFlightPassengerDetailsHandler}
          checkInPassengerHandler={this.checkInPassengerHandler.bind(this)}
          offloadPassengerHandler={this.offloadPassengerHandler.bind(this)}
          seatHandler={this.seatHandler.bind(this)}
          handleUpdateServicesMeal={(mealItem, passenger) =>
            this.handleUpdateServicesMeal(mealItem, passenger)
          }
          handleUpdateServicesAncillary={(ancillary, passenger) =>
            this.handleUpdateServicesAncillary(ancillary, passenger)
          }
          handleUpdateServicesShop={(shop, passenger) =>
            this.handleUpdateServicesShop(shop, passenger)
          }
          handleUpdatePassengerPersonalInfo={(
            flightId,
            firstname,
            lastname,
            dob,
            address,
            passport
          ) =>
            this.handleUpdatePassengerPersonalInfo(
              flightId,
              firstname,
              lastname,
              dob,
              address,
              passport
            )
          }
          handleAddPassengerInfo={(
            flightId,
            firstname,
            lastname,
            dob,
            gender,
            wheelChair,
            infants,
            mobile,
            email,
            address,
            passport
          ) =>
            this.handleAddPassengerInfo(
              flightId,
              firstname,
              lastname,
              dob,
              gender,
              wheelChair,
              infants,
              mobile,
              email,
              address,
              passport
            )
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    flight: state.flightDetails.flight,
    loading: state.flightLists.loading,
    error: state.flightLists.error,
    isAuthenticated: state.auth.token !== null,
    passengerDetails: state.flightDetails.passengerList,
    seatLists: state.flightDetails.passengerSeatList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFlightFetch: (flightId) => dispatch(action.flightDetails(flightId)),
    onPassengerDetailsLists: (passengerList) =>
      dispatch(action.flightPassengerDetails(passengerList)),
    seatListsDetails: () => dispatch(action.flightSeatDetails()),
    onUpdateSeatDetailsInPassengerDetails: (
      passId,
      seatDetail,
      passengerList
    ) =>
      dispatch(
        action.updateSeatDetailsInPassengerDetails(
          passId,
          seatDetail,
          passengerList
        )
      ),
    onUpdateSeatDetails: (seatId, seat, seatList) =>
      dispatch(action.updateSeatDetails(seatId, seat, seatList)),
    onUpdateMeals: (passId, PassengerDetails, passengerList) =>
      dispatch(
        action.updateMealsDetails(passId, PassengerDetails, passengerList)
      ),
    onUpdateShop: (passId, PassengerDetails, passengerList) =>
      dispatch(
        action.updateShopDetails(passId, PassengerDetails, passengerList)
      ),
    onUpdateAncillary: (passId, PassengerDetails, passengerList) =>
      dispatch(
        action.updateAncillaryDetails(passId, PassengerDetails, passengerList)
      ),
    onUpdatePersonalInfo: (passId, PassengerDetails, passengerList) =>
      dispatch(
        action.updatePassengerPersonalInfo(
          passId,
          PassengerDetails,
          passengerList
        )
      ),
    onFilterPassenger: (passengerList) =>
      dispatch(action.filterPassengerDetails(passengerList)),
    onAddPassenger: (obj, passengerList) =>
      dispatch(action.addPassenger(obj, passengerList)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightDetailsCointainer);
