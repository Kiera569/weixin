import React, { Component } from "react";
import './index.less'

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
class selectDepart extends Component {
  state = {
    num: "",
    subData: {},
    searchValue: ""
  };
  // 点击一级菜单
  btn = (item) => {
    this.setState({
      num: item.key,
      subData: item,
    });


  };
  // 点击二级菜单
  subBtn = (item) => {
    const { history } = this.props;
    history.push(`/appointment/${item?.value}/${item?.children[0]?.value}`)
  };

  // 搜索框点击事件
  searchBtn = searchValue => {
    console.log(searchValue)
  }
  render() {
    const { subData, searchValue } = this.state;
    return (
      <div className='selectDepart'>
        <div className='inputSearch'>
          <InputSearch
            placeholder="搜索科室"
            value={searchValue}
            onChange={e => { this.setState({ searchValue: e.target.value }) }}
            handleBtn={() => this.searchBtn(searchValue)}
          />
        </div>
        <div className='levelLinkage'>
          <div className='firstLinkage'>
            {data.map((item, index) => {
              return (
                <Item
                  text={item.value}
                  key={item.value}
                  handleBtn={() => this.btn(item)}
                ></Item>
              );
            })}
          </div>
          <div className='twoLinkage'>
            {(subData.children || []).map((item, index) => {
              return (
                <SubItem
                  text={item.value}
                  key={item.value}
                  handleBtn={() => this.subBtn(subData)}
                ></SubItem>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
}
export default selectDepart;


// 一级标题
function Item({ text, handleBtn, isBtn = false }) {
  return (
    <div className={`firstLinkageItem ${isBtn ? "active" : ""} `} onClick={() => handleBtn()
    }>
      {text}
    </div >
  );
}

// 二级标题
function SubItem({ text, handleBtn }) {
  return (
    <div className="twoLinkageItem" onClick={() => handleBtn()}>
      {text}
    </div>
  );
}


// 搜索框
function InputSearch({ placeholder, value, onChange, other, handleBtn }) {
  return (
    <div className='inputSearchBox'>
      <div className='inputSearchIcon' onClick={() => handleBtn()
      }>
        <svg t="1594954260050" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width=".26rem" height=".26rem"><path d="M400.704 801.408A400.64 400.64 0 1 1 400.704 0a400.64 400.64 0 0 1 0 801.408z m0-89.024a311.68 311.68 0 1 0 0-623.36 311.68 311.68 0 0 0 0 623.36z m267.264-110.4l314.752 314.88-62.912 62.912-314.816-314.816 62.976-62.976z" fill="#707070" p-id="2050"></path></svg>
      </div>
      <input className='inputSearchBox-input' value={value} onChange={onChange} placeholder={placeholder} {...other} />
    </div>
  )
}