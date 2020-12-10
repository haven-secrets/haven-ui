import React from "react";
import { Header, List } from "semantic-ui-react";
import PermittedUser from "./PermittedUser";
import AddUserToProject from "./AddUserToProject";

const PermittedUserList = (props) => {
  return (
    <div>
      <Header size="large">Access</Header>
      <List celled animated verticalAlign="middle" size="large">
        {props.permittedUsers.map((user, i) => (
          <PermittedUser
            removePermissions={props.removePermissions}
            addPermissions={props.addUserToProject}
            user={user}
            key={i}
          />
        ))}
      </List>
      <AddUserToProject
        addUserPermission={props.addUserToProject}
        users={props.disallowedUsers}
      />
    </div>
  );
};

export default PermittedUserList;
