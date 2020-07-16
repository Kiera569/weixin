import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./route/index";
// import Store from "./store/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function handleClientWidth(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  const recalc = function recalc() {
    const { clientWidth } = docEl;
    if (!clientWidth) return;
    docEl.style.fontSize = `${100 * (clientWidth / 750)}px`;
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
}
handleClientWidth(document, window);

ReactDOM.render(
  <HashRouter>
    {/* <Store> */}
    <App />
    {/* </Store> */}
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
