/* Common to both Client and SSR server */
/* Always be sure to import this file into both places */

import React from "react";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

/* This method of route definition is done in order to use
  the react-router config to support SSR data loading
*/
export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users"
  }
];
