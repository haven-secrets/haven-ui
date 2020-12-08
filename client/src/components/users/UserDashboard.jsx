import React from "react";
import User from "./User";
import NewUserForm from "./NewUserForm";
import { Segment, Header, List } from "semantic-ui-react";

const UserDashboard = (props) => {
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <div id="users-container">
        <Header size="huge">Users</Header>
        <List animated size="huge">
          {props.users.map((user, i) => (
            <User
              userName={user.userName}
              key={i}
              onDeleteUser={props.onDeleteUser}
            />
          ))}
        </List>
      </div>
      <Segment>
        <NewUserForm users={props.users} addNewUser={props.addNewUser} />
      </Segment>
    </div>
  );
};
export default UserDashboard;
