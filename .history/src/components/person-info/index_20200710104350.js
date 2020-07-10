import React, { Component } from "react";
import { Button } from "antd";

class PersonInfo extends Component {
  submit = () => {
    console.log("点击预约");
  };
  render() {
    return (
      <div className="person-box">
        <div className="person-img">
          <img
            src="https://www.baidu.com/link?url=Jk73ctuProPqBLeX9-kJZEtL89XOddZUo5J2OPSpnz09U9WCG4cKBROXEKOtr24Z9FmiQaJuuqVOgDhHJNamv7jthKwsBEcEs9RACvDhZhKwDYwAC8jxFDwAxBmRO7eH7Bf97QhWFpNXaPXTcsF0cLgz6eElqlLceF8SnnEoLYosjjAL2dYQq1oE8t9M15M9pxr135UXtinE7pjnFUUMmb7xyPyl7HM3arqYvXCifb5auuEwTJH6eUB8gbSQpn5OZmtmIqwJlfYNOOOttQr5X7ItOGndy30Cii1dA1cuwtUxrphE3zpJbaL6is4P83bnCRyLLDWGpT5evZU8c1wyXwU9eUb6mc5H5T0bp2MddBSVgm-nFYWGlppl4c4ESWiX7hiG8IDHZ7zmbvPMTPlM0HpEU_zDzPHSuBUvla3fRnjN3MyAJga_qdUvnOuLCesVHcFFr4bLuVrkepVB_dxF0Tjgv1TWpEoGEJ9-Kt4ia14u4-CZ_VikumNOmcC4C3Kezh2ZVeEblYRxdTNdEO6zB_hvpf3Q1pjapUdTUzgQBHo-YpR7QJP-m0aeMBKLHWij7-wBZZoGfD1hYhSBywKjKpEAcbvfVIsYXFwnS3Pi0G6rN2h7x4M5lgLEGKnkm_CJIsv9V-jkBNrYdVeHjmbFt43D8MvVk_CyD5jkL5QkdCmlrX0t5KShNE0VYxFjKVzFtkLVzSfSrW91Aj7V5g4RXFsIVg4wjhD4PYms69VlZtsaCNEfA1NRjA6t82FGeTdR&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1594348563%26di%3D6be66453ad38bf87f184288da92c45ba%26src%3Dhttp%3A%2F%2Fdingyue.nosdn.127.net%2FLoW9vSuNRJO8cDpfEpJBkdLVtIyNoKw2On4OEfJt8lF9J1557269902362compressflag.jpeg&click_t=1594348566600&s_info=1166_919&wd=&eqid=c47deac900101700000000065f07d412"
            alt=""
          />
        </div>
        <div className="info-box">
          <span className="person-name">华佗</span>
          <span className="person-level"> 主治医师</span>
          <div className="person-info">22232</div>
          <div className="person-tech">444444</div>
        </div>
        <Button type="primary" onClick={this.submit} cals>
          预约
        </Button>
      </div>
    );
  }
}

export default PersonInfo;
