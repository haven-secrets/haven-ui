import React, { useEffect } from "react";
import { Header, List } from "semantic-ui-react";
import PermittedUser from "./PermittedUser";
import AddUserToProject from "./AddUserToProject";

const PermittedUserList = ({fetchAllUsers, permittedUsers, removePermissions, addUserToProject, disallowedUsers}) => {

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div>
      <Header size="large">Access</Header>
      <List celled animated verticalAlign="middle" size="large">
        {permittedUsers.map((user, i) => (
          <PermittedUser
            removePermissions={removePermissions}
            addPermissions={addUserToProject}
            user={user}
            key={i}
          />
        ))}
      </List>
      <AddUserToProject
        addUserPermission={addUserToProject}
        users={disallowedUsers}
      />
    </div>
  );
};

export default PermittedUserList;
