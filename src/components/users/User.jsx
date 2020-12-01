import React from "react";
import { Container, Header, List, Button, Divider } from "semantic-ui-react";

const User = (props) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button color="red">Delete</Button>
      </List.Content>
      <List.Icon name="users" />
      <List.Content>{props.userName}</List.Content>
    </List.Item>
  );
};

export default User;
