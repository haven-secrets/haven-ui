import React from "react";
import UsersContainer from "./UsersContainer";
import NewUserFormContainer from "./NewUserFormContainer";
import { Segment } from "semantic-ui-react";

const UserDashboard = () => (
  <div
    style={{
      marginTop: "12em",
    }}
  >
    <UsersContainer />
    <Segment>
      <NewUserFormContainer />
    </Segment>
  </div>
);

export default UserDashboard;
