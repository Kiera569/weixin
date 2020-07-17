import React, { Component } from "react";
import TopBar from "../../components/top-bar";
import PersonInfo from "../../components/person-info";
import TabComponent from "../../components/tabs";

// function DoctorPage() {
//   return (
//     <div>
//       <TopBar title="医生详情" />
//       <PersonInfo />
//       <TabComponent />
//     </div>
//   );
// }
// export default DoctorPage;

class doctorDetail extends Component {
  render() {
    return (
      <div>
        <TopBar title="医生详情" />
        <PersonInfo />
        <TabComponent />
      </div>
    );
  }
}
export default doctorDetail;
