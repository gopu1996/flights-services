import React from "react";
 import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import loginImg from "../../../assets/images/login.svg";
import "../../../sass/main.scss"

const Login = (props) => {
  // const btnInfo = {
  //   fontSize: "7rem",
  //   border: "none",
  //   borderRadius: "none",
  //   backgroundColor: "white",
  //   marginLeft: "80px",
  // };

  let err = null;
  if (props.error) {
    err = (
      <div className="alert alert-danger" id="alert" role="alert">
        {props.error}
      </div>
    );
  }

  if (props.serverError) {
    err = (
      <div className="alert alert-danger" id="alert" role="alert">
        {props.serverError}
      </div>
    );
  }

  return (
  <div> 
    <div className="base-container">
      {err}
    <form onSubmit={props.submit}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  value={props.email}
                  onChange={props.changed}
                  placeholder="email"
             />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={props.password}
                  onChange={props.changed}
               />
          </div>
        </div>
   
      </div>
    
      <div className="footer">
        <button type="submit" className="btn-btn">
          Login
        </button>
      </div>
      <div style={{marginTop:"10px"}}>
       <GoogleLogin
                      clientId="909754163994-7dlbkq7072a0e0a06n6d02tof7dulie2.apps.googleusercontent.com"
                      cookiePolicy={"single_host_origin"}
                      onSuccess={props.responseGoogle}
                      onFailure={props.responseGoogle}
          />
          </div>
          <div style={{marginTop:"10px"}}>
           <FacebookLogin
                      appId="280980003140667"
                      fields="name,email,picture"
                      callback={props.responseFacebook}
           />
          </div>
   </form>      
    </div>
  </div>  
  );
};
export default Login;
