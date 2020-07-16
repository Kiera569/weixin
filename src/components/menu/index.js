import React, { PureComponent } from "react";
import "./index.less";
const data = [
  {
    key: 1,
    value: "aaa",
    children: [
      {
        key: 1,
        value: "ason"
      }
    ]
  },
  {
    key: 4,
    value: "ddd",
    children: [
      {
        key: 1,
        value: "dson"
      }
    ]
  },
  {
    key: 2,
    value: "bbb",
    children: [
      {
        key: 1,
        value: "bson"
      },
      {
        key: 2,
        value: "bson2"
      }
    ]
  },
  {
    key: 3,
    value: "ccc",
    children: [
      {
        key: 1,
        value: "cson1"
      },
      {
        key: 2,
        value: "cson3"
      },
      {
        key: 3,
        value: "cson4"
      }
    ]
  },
  {
    key: 5,
    value: "5555"
  }
];
class Menu extends PureComponent {
  state = {
    num: "",
    subData: "",
    showChidren: false
  };
  btn = item => {
    this.setState({
      num: item.key,
      subData: item.children || ""
    });
    if (this.state.subData) {
      this.setState({
        showChidren: !this.state.showChidren
      });
    }
  };
  render() {
    const { subData } = this.state;
    console.log(subData);
    return (
      <div className="menuBox">
        <div className="menuBox1">
          {data.map((item, index) => {
            return (
              <Item
                text={item.value}
                key={item.key}
                handleBtn={() => this.btn(item)}
              ></Item>
            );
          })}
        </div>
        <div className="menuBox2">
          {subData.length
            ? subData.map((item, index) => {
                return <SubItem text={item.value} key={index}></SubItem>;
              })
            : ""}
        </div>
      </div>
    );
  }
}

export default Menu;

function Item({ text, handleBtn }) {
  return (
    <div className="itemBox" onClick={() => handleBtn()}>
      {text}
    </div>
  );
}

function SubItem({ text }) {
  return <div className="SubItemBox">{text}</div>;
}
