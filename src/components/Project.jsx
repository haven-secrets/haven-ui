import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import SecretList from "./secrets/SecretList";
import PermittedUserList from "./users/PermittedUserList";

const Project = () => {
  return (
    <Container>
      <header>
        <Header size="large">Project Name: Environment</Header>
      </header>
      <SecretList />
      <Divider />
      <PermittedUserList />
    </Container>
  );
};

export default Project;
