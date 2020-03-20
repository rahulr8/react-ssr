// Entry point for the server side
// Since we run webpack + Babel over the entire codebase, can use ESNext features here

import "babel-polyfill"; //For using async-await syntax
import express from "express";

import renderer from "./helpers/renderer";
import createStore from "./helpers/createstore";

const app = express();

// Tell express that this directory is available to the outside world
app.use(express.static("public"));

// Route handler
app.get("*", (req, res) => {
  const store = createStore();

  // Some logic to intialize and load date into the store

  const renderedReactApp = renderer(req, store);
  res.send(renderedReactApp);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
