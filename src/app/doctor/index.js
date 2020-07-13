import React, { Component } from "react";
import { Accordion, List, DatePicker } from "antd-mobile";
import TopBar from "../../components/top-bar";
import "./index.less";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Doctor extends Component {
  state = {
    date: now
  };
  onChange = key => {
    console.log(key);
  };
  render() {
    return (
      <div>
        <TopBar title="医生" />
        <div className="selectBox">
          <div className="selectDoctor">
            <Accordion
              // defaultActiveKey="0"
              className="my-accordion"
              onChange={this.onChange}
            >
              <Accordion.Panel header="外科">
                <List className="my-list">
                  <List.Item>内科</List.Item>
                  <List.Item>骨科</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div className="selectDoctor">
            <Accordion
              // defaultActiveKey="0"
              className="my-accordion"
              onChange={this.onChange}
            >
              <Accordion.Panel header="2020-07-12">
                <List className="my-list">
                  <List.Item>2020-07-15</List.Item>
                  <List.Item>2020-07-16</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion>
          </div>
          {/* <div className="selectDate">
            <DatePicker
              mode="date"
              title="选择日期"
              extra="Optional"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal"></List.Item>
            </DatePicker>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Doctor;
