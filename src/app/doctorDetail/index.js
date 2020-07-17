import React, { Component } from "react";
import { Accordion } from "antd-mobile";
import PersonDetail from '../../components/person-detail'
import './index.less'


class doctorDetail extends Component {
  onChange = (key) => {
    console.log(key);
  }
  // personalInfo = () => (
  //   <div>
  //     <div className="aaa">ssssss</div>
  //     <span>个人简介</span>
  //   </div>
  // )

  render() {
    return (
      <div>
        <PersonDetail />
        <div className="person-introduce">
          <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel
              //  header={this.personalInfo}
              header="个人简介"
              className="pad ">
              硕士生导师，中华中医药学会分会常委，四川省中医学
              会肿瘤专业委员会常委，络病专业委员会常委。先后被
              评为全国卫生系统先进工作者，获市政府特殊津贴并被
              评为市级有突出贡献的专家.
            </Accordion.Panel>
          </Accordion>
          <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel
              //  header={this.personalInfo}
              header="专业擅长"
              className="pad ">
              甲状腺结节良恶性的鉴别；2，甲状腺及甲状旁腺常规,四川省中医学
              会肿瘤专业委员会常委，络病专业委员会常委。先后被
              评为全国卫生系统先进工作者节良恶性的鉴别；2，甲状腺及甲状旁腺常规,四川省中医学
              会肿瘤专业委员会常委，络病专业委员会常委。先后被
              评为全国卫生系统先进工作者节良恶性的鉴别；2，甲状腺及甲状旁腺常规,四川省中医学
              会肿瘤专业委员会常委，络病专业委员会常委。先后被
              评为全国卫生系统先进工作者，获市政府特殊津贴并被
              评为市级有突出贡献的专家.
            </Accordion.Panel>
          </Accordion>
        </div>

      </div>
    );
  }
}
export default doctorDetail;
