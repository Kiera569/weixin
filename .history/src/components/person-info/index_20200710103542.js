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
          <img src=""/>
        </div>
        <div className="info-box">
          <span className="person-name">华佗</span>
          <span className="person-level"> 主治医师</span>
          <div className="person-info">22232</div>
          <div className="person-tech">444444</div>
        </div>
        <Button type="primary" onClick={this.submit}>
          预约
        </Button>
      </div>
    );
  }
}

export default PersonInfo;
