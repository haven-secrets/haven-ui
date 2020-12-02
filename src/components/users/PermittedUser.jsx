import React from "react";
import { List, Icon } from "semantic-ui-react";

const PermittedUser = ({ user }) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Icon name="delete"></Icon>
      </List.Content>
      <List.Icon name="user" />
      <List.Content>
        <List.Header>{user.userName}</List.Header>
        {user.read ? "Read " : ""}
        {user.write ? "Write" : ""}
      </List.Content>
    </List.Item>
  );
};

export default PermittedUser;
