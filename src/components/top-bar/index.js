import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
@withRouter
class TopBar extends Component {
  goback = () => {
    const { history } = this.props;
    // history.go(-1);
    history.push("/");
  };
  ellipsisClick = () => {
    console.log("点击");
  };
  render() {
    const { title, hideBack } = this.props;
    return (
      <div>
        <NavBar
          mode="light"
          icon={hideBack ? null : <Icon type="cross" onClick={this.goback} />}
          // onLeftClick={this.onLeftClick}
          rightContent={[
            <Icon key="1" type="ellipsis" onClick={this.ellipsisClick} />
          ]}
        >
          {title}
        </NavBar>
      </div>
    );
  }
}

export default TopBar;
