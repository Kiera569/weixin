import React, { Component } from "react";
// import TopBar from "../../components/top-bar";
import { Button } from "antd-mobile";
import { withRouter } from "react-router-dom";
import TopBar from "../../../../components/top-bar";
@withRouter
class Appointment extends Component {
  gotoDoctor = () => {
    const { history } = this.props;
    history.push("/doctor");
  };
  render() {
    return (
      <div>
        <TopBar title="预约挂号" />
        <Button type="primary" onClick={this.gotoDoctor}>
          click
        </Button>
      </div>
    );
  }
}
export default Appointment;
