import React, { Component } from "react";
import PersonDetail from '../../components/person-detail'
import { Accordion } from "antd-mobile";


class doctorDetail extends Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div>
        <PersonDetail />
        <div className="person-introduce">
          <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="个人简介" className="pad">
              333333333333
            </Accordion.Panel>
          </Accordion>


        </div>

      </div>
    );
  }
}
export default doctorDetail;
