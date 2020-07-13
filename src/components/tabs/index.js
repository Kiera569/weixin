import React, { useState, useEffect } from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import "./index.less";

const tabs = [
  { title: <Badge>挂号</Badge> },
  { title: <Badge>介绍</Badge> },
  { title: <Badge>擅长</Badge> }
];

function TabComponent() {
  const [title, setTitle] = useState("挂号");
  const [introduction, setintroduction] = useState("介绍");
  const [goodAt, setGoodAt] = useState("擅长");
  useEffect(() => {
    setintroduction("医生简介");
    setGoodAt("修改擅长");
    setTitle("预约挂号");
  }, []);

  return (
    <div className="TabBox">
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff"
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff"
          }}
        >
          {introduction}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff"
          }}
        >
          {goodAt}
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  );
}

export default TabComponent;
