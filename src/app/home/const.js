import React from "react";
// 首页
import HomeContainerIndex from "./component/home";
// 预约挂号
import CommunityIndex from "./component/appointment";
// 医院
import HomeContainerActivity from "./component/hospital";
// 我的
import HomeContainerMine from "./component/doctor";

export default [
  {
    title: "首页",
    icon: <div className="tab-icon-box">{/* <img src={Home} alt="" /> */}</div>,
    selectedIcon: (
      <div className="tab-icon-box">
        {/* <img src={HomeActive} alt="" /> */}
      </div>
    ),
    component: <HomeContainerIndex />
  },
  {
    title: "挂号",
    icon: (
      <div className="tab-icon-box">{/* <img src={Community} alt="" /> */}</div>
    ),
    selectedIcon: (
      <div className="tab-icon-box">
        {/* <img src={CommunityActive} alt="" /> */}
      </div>
    ),
    component: <CommunityIndex />
  },
  {
    title: "医生",
    icon: <div className="tab-icon-box">{/* <img src={Look} alt="" /> */}</div>,
    selectedIcon: (
      <div className="tab-icon-box">
        {/* <img src={LookActive} alt="" /> */}
      </div>
    ),
    component: <HomeContainerActivity />
  },
  {
    title: "我的",
    icon: <div className="tab-icon-box">{/* <img src={Mine} alt="" /> */}</div>,
    selectedIcon: (
      <div className="tab-icon-box">
        {/* <img src={MineActive} alt="" /> */}
      </div>
    ),
    component: <HomeContainerMine />
  }
];
