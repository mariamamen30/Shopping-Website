import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Product from "./components/product";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./style.css";

import App from "./app";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);

// serviceWorker.unregister();
