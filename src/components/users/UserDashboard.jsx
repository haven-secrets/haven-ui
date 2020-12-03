import React from "react";
import UsersContainer from "./UsersContainer";
import NewUserFormContainer from "./NewUserFormContainer";

const UserDashboard = () => (
  <div
    style={{
      marginTop: "12em",
    }}
  >
    <UsersContainer />
    <NewUserFormContainer />
  </div>
);

export default UserDashboard;
