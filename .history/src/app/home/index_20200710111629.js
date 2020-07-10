import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";
import PersonInfo from "../../components/person-info/index";

class Home extends Component {
  goLogin = () => {
    const {
      history: { push }
    } = this.props;
    push("/login");
  };

  render() {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
      <div>
        <div className="home-page">首页</div>
        <PersonInfo />
        <Button type="primary" onClick={this.goLogin} className="gobtn">
          点击
        </Button>
      </div>
    );
  }
}
export default Home;
