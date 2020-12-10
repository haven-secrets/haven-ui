import React from "react";
import { List, Button } from "semantic-ui-react";

const User = (props) => {
  if (props.userName === "HavenSecretsAdmin") return ""
  return (
    <List.Item>
      <List.Content floated="right">
        <Button color="red" onClick={() => props.onDeleteUser(props.userName)}>
          Delete
        </Button>
      </List.Content>
      <List.Icon name="users" />
      <List.Content>{props.userName}</List.Content>
    </List.Item>
  );
};

export default User;
