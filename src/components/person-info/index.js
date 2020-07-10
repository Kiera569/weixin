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
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594360854144&di=6d9dabfe26d714b95a8e59edf5452673&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FLoW9vSuNRJO8cDpfEpJBkdLVtIyNoKw2On4OEfJt8lF9J1557269902362compressflag.jpeg"
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
