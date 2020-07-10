import React from "react";
import PropTypes from "prop-types";
import "./index.less";

class Nodata extends React.PureComponent {
  render() {
    const {text,} = this.props;
    return (
      <div className="clearfix no-data">
        <p>{text}</p>
      </div>
    );
  }
}

Nodata.propTypes = {
  text: PropTypes.string, // 显示内容
};

Nodata.defaultProps = {
  text: '暂无数据',
};

export default Nodata;
