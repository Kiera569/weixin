import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./route/index";
// import Store from "./store/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    {/* <Store> */}
    <App />
    {/* </Store> */}
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
