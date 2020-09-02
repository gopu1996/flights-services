import React, { Component } from "react";
import FlightLists from "../../components/flightList/FlightList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as action from "../../store/action/index";

class FlightListsCointainer extends Component {
  async componentDidMount() {
    this.props.onFlightLists();
  }

  handleUpdateServicesMeal(services, flightId) {
    const flightListsJson = {
      special_meals: services,
    };
    this.props.onUpdateMeals(flightId, flightListsJson, this.props.flightLists);
  }

  handleUpdateServicesAncillary(services, flightId) {
    const flightListsJson = {
      ancillary: services,
    };
    this.props.onUpdateAncillary(
      flightId,
      flightListsJson,
      this.props.flightLists
    );
  }

  handleUpdateServicesShop(services, flightId) {
    const flightListsJson = {
      flightShop: services,
    };
    this.props.onUpdateShop(flightId, flightListsJson, this.props.flightLists);
  }

  render() {
    let authRedirect = null;
    if (!this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }
    return (
      <div>
        {authRedirect}
        <FlightLists
          flightLists={this.props.flightLists}
          handleUpdateServicesMeal={(services, flightId) =>
            this.handleUpdateServicesMeal(services, flightId)
          }
          handleUpdateServicesAncillary={(services, flightId) =>
            this.handleUpdateServicesAncillary(services, flightId)
          }
          handleUpdateServicesShop={(services, flightId) =>
            this.handleUpdateServicesShop(services, flightId)
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.flightLists.loading,
    error: state.flightLists.error,
    isAuthenticated: state.auth.token !== null,
    flightLists: state.flightLists.flightList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFlightLists: () => dispatch(action.flightLists()),
    onUpdateMeals: (flightId, services, flightList) =>
      dispatch(action.updateFlightMealsDetails(flightId, services, flightList)),
    onUpdateShop: (flightId, services, flightList) =>
      dispatch(action.updateFlightShopDetails(flightId, services, flightList)),
    onUpdateAncillary: (flightId, services, flightList) =>
      dispatch(
        action.updateFlightAncillaryDetails(flightId, services, flightList)
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightListsCointainer);
