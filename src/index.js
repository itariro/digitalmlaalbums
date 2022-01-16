/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
import "core-js/stable";
import "regenerator-runtime/runtime"; // Needed to polyfill async / await.

import "./styles/styles.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

// Mount our app.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);