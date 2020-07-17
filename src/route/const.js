import Loadable from "react-loadable";
import LoadingComponent from "../components/loading-component";
export default [
  // 医院简介
  {
    path: "/hospital-info",
    title: "医院简介",
    component: Loadable({
      loader: () => import("../app/home/component/hospital"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 预约挂号
  {
    path: "/appointment/:val/:value",
    title: "预约挂号",
    component: Loadable({
      loader: () => import("../app/home/component/appointment"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 医生页面
  // {
  //   path: "/doctor",
  //   component: Loadable({
  //     loader: () => import("../app/home/component/doctor"),
  //     loading: LoadingComponent,
  //     delay: 300
  //   })
  // },
  // 医生详情
  {
    path: "/doctorDetail/:info",
    title: "医生详情",
    component: Loadable({
      loader: () => import("../app/doctorDetail"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 科室选择
  {
    path: "/selectDepart",
    title: "科室选择",
    component: Loadable({
      loader: () => import("../app/selectDepart"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 就诊信息
  {
    path: "/seeInfo",
    title: "就诊信息",
    component: Loadable({
      loader: () => import("../app/seeInfo"),
      loading: LoadingComponent,
      delay: 300
    })
  }
];
