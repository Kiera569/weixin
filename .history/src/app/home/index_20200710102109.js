import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";
import PersonInfo from "../../components/person-info/index";

class Home extends Component {
  btn = () => {
    const {
      history: { push }
    } = this.props;
    push("/login");
  };

  render() {
    return (
      <div className="home-page">
        首页
        <Button type="primary" onClick={this.btn} className>
          点击
        </Button>
        <PersonInfo />
      </div>
    );
  }
}
export default Home;
