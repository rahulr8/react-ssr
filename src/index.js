// Entry point for the server side
// Since we run webpack + Babel over the entire codebase, can use ESNext features here

import "babel-polyfill"; // For using async-await syntax
import express from "express";
import { matchRoutes } from "react-router-config";

import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createstore";

const app = express();

// Tell express that this directory is available to the outside world
app.use(express.static("public"));

// Route handler
app.get("*", (req, res) => {
  const store = createStore();

  /* Logic to intialize and load data into the store
    * Mapping over every route and calling the loadData functions
      for those Routes that have it
    * It returns an array of promises from all the action creators
    that end up being called
   */
  const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log("loadDataPromises", loadDataPromises);

  Promise.all(loadDataPromises)
    .then(() => {
      // Once all the data is fetched, we render the app
      const renderedReactApp = renderer(req, store);
      res.send(renderedReactApp);
    })
    .catch(console.error);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
