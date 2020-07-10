import React from "react";
import { Provider } from "mobx-react";
import userInfo from "./user-info";

export default ({ children }) => (
  <Provider userState={userInfo}>{children}</Provider>
);
