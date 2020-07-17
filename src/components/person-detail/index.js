import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.less";
@withRouter
class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAttention: false,
    }
  }

  submit = (item) => {
    console.log(111, item)
    const { history } = this.props;
    history.push('/doctorDetail/' + JSON.stringify(item))
  };
  // 点击收藏
  attentionBtn = () => {
    console.log(111);
    this.setState({
      isAttention: true
    })
  }
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
              <span className="person-name">朱一龙</span>
              <div className="person-level">主治医师</div>
            </div>
            <div className="person-info">博州人民医院</div>
            <div className="person-tech">甲状腺外科门诊患者</div>
          </div>
          <div onClick={this.attentionBtn}>
            {/* {this.attentionBtn?()} */}
            <svg t="1594978673450" className="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2139" width=".5rem" height=".41rem"><path d="M640 1000.93353c-11.249631 0-22.121123-3.781388-31.480059-10.966026-12.100443-9.358936-296.838996-230.570162-409.429838-407.161005-38.286558-60.124077-86.026588-134.995569-86.026587-240.496307 0-84.986706 30.156573-165.057607 85.08124-225.370753 54.546529-60.029542 126.960118-93.400295 203.911374-93.967504h3.970458c43.391433 0.283604 85.364845 11.060561 124.59675 31.858198 38.286558 20.324963 72.697194 50.197932 99.450517 86.404727l9.926145 13.329394 9.926145-13.329394c26.753323-36.206795 61.163959-66.079764 99.450517-86.404727 39.231905-20.797637 81.205318-31.574594 124.691285-31.858198h3.970458c76.856721 0.567208 149.27031 33.937962 203.816839 93.967504 54.830133 60.313146 85.081241 140.384047 85.08124 225.370753 0 105.595273-47.74003 180.37223-86.026587 240.496307-112.968981 177.252585-397.329394 397.896603-409.429838 407.161005-9.358936 7.184638-20.230428 10.966027-31.480059 10.966026zM404.135894 72.129985C267.344165 72.129985 155.982275 193.323486 155.982275 342.310192c0 82.906942 33.654357 142.369276 77.707533 211.568685 45.565731 71.468242 126.581979 159.763663 240.779911 262.428361 84.797637 76.194978 157.211226 132.348597 157.967504 132.915805l7.468242 5.766617 7.468243-5.766617c0.756278-0.567208 73.169867-56.720827 157.967503-132.915805 114.197932-102.664697 195.21418-190.960118 240.685377-262.428361 44.053176-69.104874 77.707533-128.567208 77.707533-211.568685 0-148.986706-111.267356-270.180207-248.153619-270.180207-97.937962 0-186.98966 63.149188-226.788774 160.803545l-0.283604 0.567209-0.189069 0.661743c-1.228951 4.348597-4.82127 7.373708-8.697194 7.373707s-7.279173-2.741507-8.508124-6.995569l-0.189069-0.567208-0.283604-0.567208C591.409158 135.468242 502.262925 72.129985 404.135894 72.129985z" fill="#29b9c3" p-id="2140"></path></svg>
            <div className="attention-box">收藏</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetail;
