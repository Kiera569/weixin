import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tabs } from 'antd-mobile'
import './index.less';
import PersonInfo from '../../../../components/person-info'
@withRouter
class Appointment extends Component {
  gotoDoctor = () => {
    const { history } = this.props;
    history.push("/doctorDetail");
  };
  renderContent = tab =>
    (
      <PersonInfo />
    );

  getInfo = (tabs) => {
    tabs.map((item) => {
      return <PersonInfo key={item.title} />
    })
  }

  render() {
    console.log(this.props.match.params)
    const tabs = [
      { title: '周一', date: '07.15' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];
    return (
      <div className="preAppointment">
        <div className="appoint-title">
          <div className="departMent">泌尿科</div>
          <div className="depart">甲状腺内分泌专科</div>
        </div>
        <div className="appoint-content">
          <PersonInfo />
          {/* <Tabs tabs={tabs} tabBarActiveTextColor="#29b9c3" tabBarUnderlineStyle={{ border: "2px solid #29b9c3" }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} onTabClick={() => this.getInfo(tabs)} />}>
            {this.renderContent}
          </Tabs> */}
          {/* <div className="appoint-content-head">
            <div className="content-tab">
              <div>zhou</div>
              <div>07.15</div>
            </div>
          </div>
          <div className="appoint-content-info"></div> */}
        </div>


      </div>
    );
  }
}
export default Appointment;
