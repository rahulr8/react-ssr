/** SSR Helper */
/** Renders the React app and returns it as a string */

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

import Routes from "../client/Routes";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  /**
   * We pass in the store from the server side
   * into the client side
   * We first serialize the data to protect from XSS
   * a.k.a Special characters are replaced with their unicode equivalients
   */
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE=${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
