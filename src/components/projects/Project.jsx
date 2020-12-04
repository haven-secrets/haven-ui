// import React from "react";
import { Header, Divider } from "semantic-ui-react";
import SecretList from "../secrets/SecretList";
import PermittedUserListContainer from "../users/PermittedUserListContainer";

const Project = (props) => {
  const projectName = props.match.params.project;
  const environment = props.match.params.environment;
  if (!props.projectsInfo || props.projectsInfo.length === 0) {
    props.fetchProjectsInfo();
  }
  const permissions = props.projectsInfo.find(
    (project) => project.projectName === projectName
  )?.environments[environment];
  if (!permissions) return "";
  
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
      <SecretList permissions={permissions} />
      <Divider />
      <PermittedUserListContainer
        projectName={projectName}
        environment={environment}
      />
    </div>
  );
};

export default Project;
