import React, { Component } from "react";
import "./index.less";
import { Button } from "antd";

class PersonInfo extends Component {
  submit = () => {
    console.log("点击预约");
  };
  render() {
    return (
      <div className="person-box">
        <div className="person-img">
          <img />
        </div>
        <div className="info-box">
          <span className="person-name">华佗</span>
          <span className="person-level"> 主治医师</span>
          <div className="person-info"></div>
          <div className="person-tech"></div>
        </div>
        <Button type="primary" onClick={this.submit}>
          预约
        </Button>
      </div>
    );
  }
}

export default PersonInfo;
