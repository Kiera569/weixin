import React, { Component } from "react";
import { Accordion, Button } from "antd-mobile";
import PersonDetail from "../../components/person-detail";
import "./index.less";

class doctorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: -1  // 是否点击了排班框
    }
  }
  onChange = key => {
    console.log(key);
  };

  renderHead = (a, b) => (
    <div>
      <span className="aaa">{b}</span>
      <span>{a}</span>
    </div>
  );


  // 点击排班框
  orderBtn = (item, index) => {
    this.setState({
      isBtn: index
    })

  }

  // 确认预约 
  confirmBtn = () => {
    console.log(111)
  }

  render() {
    const { isBtn } = this.state;
    return (
      <div className="doctor-detail">
        <PersonDetail />
        <div className="person-introduce">
          <Accordion
            defaultActiveKey="0"
            className="my-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel
              header={this.renderHead("个人简介", "icon")}
              className="pad "
            >
              硕士生导师，中华中医药学会分会常委，四川省中医学
              会肿瘤专业委员会常委，络病专业委员会常委。先后被
              评为全国卫生系统先进工作者，获市政府特殊津贴并被
              评为市级有突出贡献的专家.
            </Accordion.Panel>
          </Accordion>
          <Accordion
            defaultActiveKey="0"
            className="my-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel
              header={this.renderHead("专业擅长", "icon")}
              className="pad "
            >
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

          <div className="work-order">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (<WorkOrderBox text="07.15 星期三 上午" handleBtn={() => this.orderBtn(item, index)} index={index} isBtn={isBtn} key={item} isPre={true} />)

            })
            }

            <Button className="confirm-pre" type="primary" onClick={this.confirmBtn}>确认预约</Button>
          </div>

        </div>

      </div>
    );
  }
}
export default doctorDetail;


function WorkOrderBox({ text, handleBtn, index, isBtn, isPre }) {
  const HasNumStyle = isPre ? "order-info-active" : "order-info-unactive"; // 是否有号
  // 是否选中当前号
  const IsBtnStyle = isBtn === index ? "order-info-isbtn" : ""
  return (
    <div className={"order-info" + " " + `${HasNumStyle}` + " " + `${IsBtnStyle}`} onClick={() => handleBtn()}>
      {text}
    </div>
  )
}
