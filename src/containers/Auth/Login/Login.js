import React, { Component } from "react";
import LoginComponent from "../../../components/Auth/Login/Login";
import { connect } from "react-redux";
import * as action from "../../../store/action/index";
import { Redirect } from "react-router-dom";
import "../../../sass/main.scss"
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  submitHander = (event) => {
    event.preventDefault();
    this.validateEmailAndPassword(this.state.email, this.state.password);
    this.props.onAuth(this.state.email, this.state.password);
  };

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateEmailAndPassword(email, password) {
    if (email === "" || password === "") {
      this.setState({
        error: "Email And Password is Required",
      });
    } else if (password.length < 3) {
      this.setState({
        error: "Password is must be more than 3 digit",
      });
    } else {
      this.setState({
        error: "",
      });
    }
  }

  responseGoogle = (response) => {
    this.props.onGoogleFacebookLogin(
      response.tokenId,
      response.profileObj.name,
      "Airline Staff"
    );
  };

  responseFacebook = (response) => {
    console.log(response);
    this.props.onGoogleFacebookLogin(
      response.accessToken,
      response.name,
      "Admin"
    );
  };

  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/flightList" />;
    }
    return (
    <div className="bgimage" > 
      <div className="App-login">
       <div className="login">
          <div className="container">
        {authRedirect}
        <LoginComponent
          email={this.state.email}
          password={this.state.password}
          changed={this.inputChangeHandler.bind(this)}
          submit={this.submitHander.bind(this)}
          error={this.state.error}
          serverError={this.props.error}
          responseGoogle={this.responseGoogle.bind(this)}
          responseFacebook={this.responseFacebook.bind(this)}
        />
        </div>
      </div>
   </div>   
   </div>    
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(action.auth(email, password)),
    onGoogleFacebookLogin: (token, name, userType) =>
    dispatch(action.googleFacebookLoginDetailAction(token, name, userType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
