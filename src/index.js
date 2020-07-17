import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Routers from "./route/index";
// import Store from "./store/index";
import WatchRouterChange from "./watchRouterChange";
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
    <WatchRouterChange>
      <Routers />
    </WatchRouterChange>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
