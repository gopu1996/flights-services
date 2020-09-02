import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducer/Auth";
import flightReducer from "./store/reducer/FlightLists";
import flightDetailsRedure from "./store/reducer/FlightDetails";
import { loadState, saveState } from "./localStroge/LocalStroge";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  flightLists: flightReducer,
  flightDetails: flightDetailsRedure,
});
let persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveState(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
