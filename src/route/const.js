import Loadable from "react-loadable";
import LoadingComponent from "../components/loading-component";
export default [
  {
    path: "/hospital-info",
    component: Loadable({
      loader: () => import("../app/home/component/hospital"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  {
    path: "/appointment",
    component: Loadable({
      loader: () => import("../app/home/component/appointment"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 医生页面
  {
    path: "/doctor",
    component: Loadable({
      loader: () => import("../app/home/component/doctor"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  // 医生主页
  {
    path: "/doctorPage",
    component: Loadable({
      loader: () => import("../app/doctorPage"),
      loading: LoadingComponent,
      delay: 300
    })
  }
];
