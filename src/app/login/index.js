import React, { Component } from "react";
import { Button } from "antd";

class Login extends Component {
  goHospital = () => {
    const { history } = this.props;
    history.push("/hospital-info");
  };
  render() {
    return (
      <div>
        登录
        <Button type="primary" onClick={this.goHospital}>
          跳转
        </Button>
      </div>
    );
  }
}
export default Login;
