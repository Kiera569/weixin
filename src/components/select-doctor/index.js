import React, { useState } from "react";
import { Picker, List } from "antd-mobile";
import "./index.less";
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

const SelectDoctor = () => {
  const [title, setTitle] = useState("外科");
  return (
    <div>
      <List style={{ backgroundColor: "white" }} className="picker-list">
        <Picker
          data={datas}
          cols={1}
          className="forss"
          onOk={title => {
            setTitle(title);
          }}
        >
          <List.Item arrow="horizontal">{title}</List.Item>
        </Picker>
      </List>
    </div>
  );
};

export default SelectDoctor;
