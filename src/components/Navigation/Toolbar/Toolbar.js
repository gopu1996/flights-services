import React from "react";
import "../../../sass/main.scss"
import NavigationItems from "../NavigationIteams/NavigationIteams";
import Logo from "../../Logo/Logo";
import Aux from "../../../hoc/AuxHoc/Auxs";

const Toolbar = (props) => (
  <Aux>
    <header className="Toolbar">
      <div className="Logo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
    {props.isAuth ? (
      <header className="iteams">
        <nav className="DesktopOnly">
          <div className="container">
            <ul
              className="nav"
            >
              <li className="nav-item">User : {props.isUserName}</li>
              <li className="nav-item" style={{marginLeft:"15px"}}>LOGIN AS: {props.isUserType}</li>
            </ul>
          </div>
        </nav>
      </header>
    ) : null}
  </Aux>
);

export default Toolbar;
