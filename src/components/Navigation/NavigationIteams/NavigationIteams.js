import React from "react";
import "../../../sass/main.scss"
import NavigationIteam from "./NavigationIteam/NavigationIteam";

const NavigationIteams = (props) => (
  <ul className="NavigationItems">
    {!props.isAuth ? (
      <NavigationIteam link="/">LOGIN</NavigationIteam>
    ) : (
      <NavigationIteam link="/logout">LOGOUT</NavigationIteam>
    )}
  </ul>
);
export default NavigationIteams;
