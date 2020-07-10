import React, { Component } from "react";
import "./index.less";
import { Button } from "antd";

class PersonInfo extends Component {
  render() {
    return (
      <div className="person-box">
        <div className="person-img">
          <img />
        </div>
        <div className="info-box">
          <span className="person-name"></span>
          <span className="person-level"></span>
          <div className="person-info"></div>
          <div className="person-tech"></div>
        </div>
        <Button type="primary" onClick={this.}>预约</Button>
      </div>
    );
  }
}

export default PersonInfo;
