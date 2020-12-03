// import React from "react";
import { Header, Divider } from "semantic-ui-react";
import SecretList from "./secrets/SecretList";
import PermittedUserListContainer from "./users/PermittedUserListContainer";

const Project = ({ match }) => {
  const projectName = match.params.project;
  const environment = match.params.environment;

  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">{projectName}</Header>
      <Header size="medium" style={{ marginBottom: "2em" }}>
        {environment}
      </Header>
      <SecretList />
      <Divider />
      <PermittedUserListContainer
        projectName={projectName}
        environment={environment}
      />
    </div>
  );
};

export default Project;
