import React, { useState, useEffect } from "react";

// 自定义Hook 使两个组件之间共享挂号状态
const usePredict = userID => {
  const [isPredict, setPredict] = useState(null);
  // 渲染后执行这些操作(每次渲染后都会执行,即发生在DOM更新完毕阶段----包括首次渲染)---->接收的是个函数
  // 每次我们重新渲染，都会生成新的 effect，替换掉之前的
  useEffect(() => {
    setPredict()
    function handleStatusChange(status) {
      setPredict(status.isPredict);
    }
    // ChatAPI.subsribeToPredictStatus(userID, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(userID, handleStatusChange);
    // };
  });
  return isPredict;
};
export default usePredict;
