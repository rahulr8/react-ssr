/* Common to both Client and SSR server */
/* Always be sure to import this file into both places */

import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import UsersList from "./components/UsersList";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
};
