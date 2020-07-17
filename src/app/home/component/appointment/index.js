import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tabs } from 'antd-mobile'
import './index.less';
import PersonInfo from '../../../../components/person-info';

// todo :组件传值
const personData = {
  name: '朱一龙',
  zhiwei: "教授",
  yazhuanye: "2333333",
  yueyue: false,
  tech: '22222222'
}
const personData2 = {
  name: '易烊千玺',
  zhiwei: "主治医师",
  yazhuanye: "2333333",
  yueyue: true,
  tech: '22222222'
}
@withRouter
class Appointment extends Component {
  gotoDoctor = () => {
    const { history } = this.props;
    history.push("/doctorDetail");
  };
  renderContent = tab =>
    (
      <div>
        <PersonInfo props={personData} />
        <PersonInfo props={personData2} />
      </div>
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
          <Tabs tabs={tabs} tabBarActiveTextColor="#29b9c3" tabBarUnderlineStyle={{ border: "2px solid #29b9c3" }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} onTabClick={() => this.getInfo(tabs)} />}>
            {this.renderContent}
          </Tabs>
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
