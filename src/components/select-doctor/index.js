import React, { useState, useEffect } from "react";
import { Picker, List } from "antd-mobile";
import "./index.less";

const SelectDoctor = props => {
  console.log(props.data);
  const [title, setTitle] = useState("外科");
  useEffect(() => {
    document.getElementsByClassName("am-list-extra")[0].remove();
  }, []);
  return (
    <div className="seleBox">
      <List style={{ backgroundColor: "white" }} className="picker-list">
        <Picker
          data={props.data}
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
