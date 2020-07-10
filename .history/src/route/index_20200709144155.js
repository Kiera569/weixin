import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
// import Cookies from "js-cookie";
// import urlConfig from "./const";
import LoadingComponent from "../components/loading-component";
// import Home from "../app/home";
// import Login from "../app/login";
import "./index.less";

// 首页
const AsyncHome = Loadable({
  loader: () => import("../app/home"),  // 动态加载所需组件
  loading: LoadingComponent      // 在动态加载还未完成的过程中
});

// 登录
const AsyncLogin = Loadable({
  loader: () => import("../app/login"),
  loading: LoadingComponent
});

class Layoutroute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/login" component={AsyncLogin} />
        {/* {urlConfig.map(v => {
          return (
            <Route
              path={v.path}
              key={v.path}
              exact
              render={() => {
                const Component = v.component;
                return v.needLogin && !Cookies.get("SystemToken") ? (
                  <Redirect to="/login" />
                ) : (
                  <Component />
                );
              }}
            />
          );
        })} */}
      </Switch>
    );
  }
}

export default Layoutroute;
