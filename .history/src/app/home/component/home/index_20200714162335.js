import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./index.less";
// import PersonInfo from "../../components/person-info/index";
// import TopBar from "../../components/top-bar";
import PersonInfo from "../../../../components/person-info";
import TopBar from "../../../../components/top-bar";
import { withRouter } from "react-router-dom";

@withRouter
class Home extends Component {
  goLogin = () => {
    const {
      history: { push }
    } = this.props;
    push("/login");
  };

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    const { history } = this.props;
    return (
      <div>
        <TopBar title="首页" hideBack="null" />
        {arr.map((item, index) => {
          return <PersonInfo key={item} props={history} />;
        })}

        <Button type="primary" onClick={this.goLogin} className="gobtn">
          点击
        </Button>
      </div>
    );
  }
}
export default Home;
