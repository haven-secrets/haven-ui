import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import Welcome from "../Welcome.js";
import Nav from "./Nav.js";

// TODO: decide if we want a <Welcome /> in our app at all.
function HavenHeader() {
  return (
    <Container textAlign="left">
      <Header
        as="h1"
        content="Haven"
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "0.5em",
        }}
      />
      <Nav />

      <Welcome />
      <Divider style={{ marginBottom: "1.5em" }} />
    </Container>
  );
}

export default HavenHeader;
