import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
Administrator@DESKTOP-0GNUOJE MINGW64 /e/CODE/bzfy_web (master)
$ yarn start
Administrator@DESKTOP-0GNUOJE MINGW64 /e/CODE/bzfy_web (master)
$ yarn start

// import Store from "./store/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function handleClientWidth (doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
  const recalc = function recalc () {
    const { clientWidth, } = docEl;
    if (!clientWidth) return;
    docEl.style.fontSize = `${100 * (clientWidth / 1080)}px`;
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
