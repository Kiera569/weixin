import { observable, action } from "mobx";
class UserInfo {
  @observable userInfo = {}; // 当前用户信息
}

export default new UserInfo();
