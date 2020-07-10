import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";
import PersonInfo from 


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
        <Button type="primary" onClick={this.btn}>
          点击
        </Button>
      </div>
    );
  }
}
export default Home;
