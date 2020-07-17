import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.less";
@withRouter
class PersonInfo extends Component {
  constructor(props) {
    super(props)
  }

  submit = (item) => {
    console.log(111, item)
    const { history } = this.props;
    history.push('/doctorDetail/' + JSON.stringify(item))
  };
  render() {
    console.log(this.props)
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
              <span className="person-name">{this.props.props.name}</span>
              <div className="person-level"> {this.props.props.zhiwei}</div>
            </div>
            <div className="person-info">
              亚专业:
              <span className='person-info-text'> {this.props.props.yazhuanye}</span>
              {
                this.props.props.yueyue ? (<div className='pre-btn' onClick={() => this.submit(this.props.props)}>预约</div>) : (<div className='before-btn'>约满</div>)
              }
            </div>
            <div className="person-tech">专业擅长:<span className='person-tech-text'>{this.props.props.tech}</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfo;
