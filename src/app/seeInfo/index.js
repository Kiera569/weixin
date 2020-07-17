import React, { PureComponent, useEffect, useState, useRef, } from "react";
import { Button } from "antd-mobile";
import "./index.less";
import { withRouter } from "react-router-dom";
@withRouter
class seeInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      code: "",
    }
  }

  getPhoneCode = () => {
    return new Promise((r) => {
      r(1232);
    });
  }

  submit = () => {
    const { history } = this.props;
    history.push('/selectDepart')
  }

  render() {
    const { name } = this.state;
    return (
      <div className="dailogInfo">
        <InputItem
          textAlign="right"
          label="姓名"
          placeholder="请输入姓名(必填)"
          value={name}
          onChange={e => {
            this.setState({ name: e.target.value, })
          }}
        />
        <InputItem
          textAlign="right"
          label="手机号码"
          other={{ maxLength: 11 }}
          placeholder="请输入手机号码(必填)"
        />
        <InputItem
          textAlign="right"
          label="验证码"
          other={{ maxLength: 6 }}
          rightRender={() => <PhoneCodeBtn requestPromise={this.getPhoneCode()} />}
        />
        <Button className="submitBtn" onClick={this.submit}>
          提交
        </Button>
      </div>
    );
  }
}
export default seeInfo;


// 封装输入框组件
function InputItem({ label, placeholder, rightRender, textAlign = "left", value, onChange, other }) {
  return (
    <div className="inputItem">
      <span className="inputItem_label">{label}</span>
      <input className="inputItem_input" value={value} onChange={onChange} style={{ textAlign, }} placeholder={placeholder} {...other} />
      {
        rightRender && rightRender()
      }
    </div>
  );
}

// 获取验证码
function PhoneCodeBtn({ requestPromise, duartion = 10, text = "获取验证码" }) {
  const timerHander = useRef(null);
  const [time, setTime] = useState(duartion)
  useEffect(() => {
    if (time - 1 <= 0) {
      setTime(duartion);
      clearTimeout(timerHander.current);
      return;
    }
    if (time !== duartion) {
      timerHander.current = setTimeout(() => {
        console.log("111", time - 1)
        setTime(time - 1);
      }, 1000)
    }
  }, [time, timerHander, duartion])

  const isSending = time !== duartion;
  const renderText = !isSending ? text : `${time}s后重新获取`;

  const sendRequest = () => {
    if (isSending) {
      return;
    }
    requestPromise.then(() => {
      setTime(time - 1)
    })
  };

  return (
    <div className={`phoneCodeBtn ${isSending ? "disabled" : ""}`} onClick={sendRequest}>
      {renderText}
    </div>
  );
}