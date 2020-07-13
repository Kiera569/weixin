import React, { useState } from "react";
import TopBar from "../../components/top-bar";
import PersonInfo from "../../components/person-info";
import TabComponent from "../../components/tabs";

function DoctorPage() {
  return (
    <div>
      <TopBar title="医生主页" />
      <PersonInfo />
      <TabComponent />
    </div>
  );
}
export default DoctorPage;
