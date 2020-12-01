import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";

function Nav() {
  return (
    <Container textAlign="left">
      <Header
        as="h1"
        content="Haven"
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: ".5em",
        }}
      />
      <Menu secondary style={{ fontSize: "1.5em" }}>
        <Menu.Item name="Projects" />
        <Menu.Item name="Users" />
        <Menu.Item name="Logs" />
      </Menu>
    </Container>
  );
}

export default Nav;
