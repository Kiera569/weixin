import React from "react";
import { TabBar } from "antd-mobile";
import { observer, inject } from "mobx-react";
import tabItem from "./const";
import "./index.less";

// @inject("userState")
// @observer
class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    // const tab = sessionStorage.getItem("_homeKey");

    this.state = {
      // selectedTab: tab || "0"
      selectedTab: "0"
    };
  }
  render() {
    const { selectedTab } = this.state;
    return (
      <div className="home-index">
        <TabBar
          unselectedTintColor="#191919"
          tintColor="#794ca6"
          prerenderingSiblingsNumber={0}
        >
          {tabItem.map((v, i) => {
            return (
              <TabBar.Item
                title={v.title}
                key={`${i}`}
                icon={v.icon}
                selectedIcon={v.selectedIcon}
                selected={selectedTab === `${i}`}
                onPress={() => {
                  console.log(1111);
                  // const { userState } = this.props;
                  // sessionStorage.setItem("_homeKey", `${i}`);
                  // if (i === tabItem.length - 1) {
                  // userState.initUser();
                  // }
                  this.setState({
                    selectedTab: `${i}`
                  });
                }}
              >
                {v.component}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

export default HomeIndex;
