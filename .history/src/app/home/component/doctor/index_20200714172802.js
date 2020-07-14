import React, { Component } from "react";
import { Accordion, List, DatePicker } from "antd-mobile";
import TopBar from "../../../../components/top-bar";
import "./index.less";
import SelectDoctor from "../../../../components/select-doctor";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const datas = [
  {
    label: <span>内科</span>,
    value: "内科"
  },
  {
    label: <span>骨科</span>,
    value: "骨科"
  },
  {
    label: <span>儿科</span>,
    value: "儿科"
  },
  {
    label: <span>妇产科</span>,
    value: "妇产科"
  },
  {
    label: <span>脑科</span>,
    value: "脑科"
  },
  {
    label: <span>精神科</span>,
    value: "精神科"
  }
];

class Doctor extends Component {
  state = {
    date: now
    // header: "外科"
  };
  // onChange = key => {
  //   console.log(key);
  // };
  // selectDepartment = () => {
  // console.log(111);
  // this.setState({
  // header: "内科"
  // });
  // };
  render() {
    // const { header } = this.state;
    return (
      <div>
        <TopBar title="医生" />
        <div className="selectBox">
          {/* <div className="selectDoctor">
            <Accordion
              // defaultActiveKey="0"
              className="my-accordion"
              onChange={this.onChange}
            >
              <Accordion.Panel header={header}>
                <List className="my-list">
                  {["内科", "骨科", "妇产科"].map((item, index) => {
                    return (
                      <List.Item onClick={this.selectDepartment} key={index}>
                        {item}
                      </List.Item>
                    );
                  })}
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
        </div>
       */}
          <SelectDoctor data={datas} />
          <div className="selectDate">
            <DatePicker
              mode="date"
              title="选择日期"
              extra="Optional"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal"></List.Item>
            </DatePicker>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
