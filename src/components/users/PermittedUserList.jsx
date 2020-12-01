import React from "react";
import { Header, List } from "semantic-ui-react";
import PermittedUser from "./PermittedUser";
import AddUserToProject from "./AddUserToProject";

const PermittedUserList = () => {
  const users = ["Developer 1", "Developer 2", "Server 1", "Server 2"];

  return (
    <div>
      <Header size="large">Access</Header>
      <List celled animated verticalAlign="middle" size="large">
        {users.map((user) => <PermittedUser user={user} />)}
      </List>
      <AddUserToProject />
    </div>
  );
};

export default PermittedUserList;
