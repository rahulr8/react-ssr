/* Common to both Client and SSR server */
/* Always be sure to import this file into both places */

import React from "react";

import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

/* This method of route definition is done in order to use
  the react-router config to support SSR data loading
*/
export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
