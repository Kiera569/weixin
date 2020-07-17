import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './index.less'
@withRouter
class Appointment extends Component {
  gotoDoctor = () => {
    const { history } = this.props;
    history.push("/doctorDetail");
  };

  render() {
    console.log(this.props)
    return (
      <div>

      </div>
    );
  }
}
export default Appointment;
