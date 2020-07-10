import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";

class PersonInfo extends Component {
  submit = () => {
    console.log("点击预约");
  };
  render() {
    return (
      <div className="person-box">
        <div className="person-img">
          <img
            src=
            alt=""
          />
        </div>
        <div className="info-box">
          <span className="person-name">华佗</span>
          <span className="person-level"> 主治医师</span>
          <div className="person-info">介绍:22232</div>
          <div className="person-tech">擅长技术:444444</div>
        </div>
        <Button type="primary" onClick={this.submit} className="pre-btn">
          预约
        </Button>
      </div>
    );
  }
}

export default PersonInfo;