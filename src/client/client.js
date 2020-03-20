/**
 * Entry point into our client side
 * This is compiled by webpack and dropped into public/bundle.js
 * The client then gets this bundle alone with the HTML when they request for the website
 */

import "babel-polyfill"; // For using async-await syntax
import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "./Routes";
import reducers from "./reducers";

/* Store for client side of the app */
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
