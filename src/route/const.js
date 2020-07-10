import Loadable from "react-loadable";
import LoadingComponent from "../components/loading-component";
export default [
  {
    path: "/hospital-info",
    component: Loadable({
      loader: () => import("../app/hospital"),
      loading: LoadingComponent,
      delay: 300
    })
  },
  {
    path: "/appointment",
    component: Loadable({
      loader: () => import("../app/appointment"),
      loading: LoadingComponent,
      delay: 300
    })
  }
];
