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
    push("/seeInfo");
  };

  render() {
    return (
      <div className="home">
        医院简介
        <Button type="primary" onClick={this.goLogin} className="submitBtn">
          点击
        </Button>
      </div>
    );
  }
}
export default Home;
