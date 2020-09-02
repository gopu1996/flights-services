import React from "react";

import { NavLink } from "react-router-dom";

const navigationIteam = (props) => (
  <li className="NavigationItem">
    <NavLink exact={props.exact} to={props.link} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

export default navigationIteam;
