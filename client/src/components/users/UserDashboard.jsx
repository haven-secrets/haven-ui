import React, { useEffect } from "react";
import User from "./User";
import NewUserForm from "./NewUserForm";
import { Segment, Header, List } from "semantic-ui-react";

const UserDashboard = ({fetchAllUsers, users, addNewUser, onDeleteUser}) => {
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  if (users?.length === 0) return ""
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <div id="users-container">
        <Header size="huge">Users</Header>
        <List animated size="huge">
          {users.map((user, i) => (
            <User
              userName={user.userName}
              key={i}
              onDeleteUser={onDeleteUser}
            />
          ))}
        </List>
      </div>
      <Segment>
        <NewUserForm users={users} addNewUser={addNewUser} />
      </Segment>
    </div>
  );
};
export default UserDashboard;
