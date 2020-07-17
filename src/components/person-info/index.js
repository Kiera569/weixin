import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd-mobile";
import "./index.less";
@withRouter
class PersonInfo extends Component {
  submit = () => {
    console.log(111)
  };
  render() {
    return (
      <div className="doctor-info">
        <div className="person-box">
          <div className="person-img">
            <img
              // src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594360854144&di=6d9dabfe26d714b95a8e59edf5452673&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FLoW9vSuNRJO8cDpfEpJBkdLVtIyNoKw2On4OEfJt8lF9J1557269902362compressflag.jpeg"
              alt=""
            />
          </div>
          <div className="info-box">
            <div className="info-title">
              <span className="person-name">华佗</span>
              <div className="person-level"> 主治医师</div>
            </div>
            <div className="person-info">亚专业:
            <span className='person-info-text'>23242535s35</span>
              <div className='pre-btn' onClick={this.submit}>预约</div>
            </div>
            <div className="person-tech">专业擅长:<span className='person-tech-text'>2sssssssssssssssssssssssdd3</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfo;
