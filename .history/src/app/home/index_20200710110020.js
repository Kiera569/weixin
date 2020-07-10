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
    return (
      <div className="home-page">
        <div></div>
        <PersonInfo />
        <Button type="primary" onClick={this.goLogin} className="gobtn">
          点击
        </Button>
      </div>
    );
  }
}
export default Home;
