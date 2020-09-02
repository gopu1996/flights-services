import Aux from "../AuxHoc/Auxs";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import React, { Component } from "react";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          isUserName={this.props.firstName}
          isUserType={this.props.userType}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    firstName: state.auth.firstName,
    userType: state.auth.userType,
    expiredIn: state.auth.expiredIn,
  };
};

export default connect(mapStateToProps)(Layout);
