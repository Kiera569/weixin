import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import urlConfig from "./const";
import LoadingComponent from "../components/loading-component";
import "./index.less";

const AsyncHome = Loadable({
  loader: () => import("../app/home"), // 动态加载所需组件
  loading: LoadingComponent // 在动态加载还未完成的过程中用该组件占位
});

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      {urlConfig.map(v => {
        return (
          <Route path={v.path} key={v.path} exact component={v.component} />
        );
      })}
    </Switch>
  );
}
