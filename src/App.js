import React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/logout/Logout";
import LazyLoading from "./hoc/asyncComponent/LazyLoading";

const FlightDetailsContainer = LazyLoading(() => {
  return import("./containers/flightDetails/FlightDetailsCointainer");
});

const FlightListCointainer = LazyLoading(() => {
  return import("./containers/flightlists/FlightListsCointainer");
});

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Login}  />
          <Route path="/logout" exact component={Logout} />\
          <Route path="/flightList" exact component={FlightListCointainer} />
          <Route
            path="/flightdetails/:passFlightId"
            component={FlightDetailsContainer}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
