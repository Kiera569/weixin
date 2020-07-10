import React from "react";
import "./index.less";

export default ({ isLoading, error }) => {
  if (isLoading) {
    return <div />;
  }
  if (error) {
    return <div className="loading-wrap">抱歉, 加载文件失败，请刷新试试.</div>;
  }
  return null;
};
