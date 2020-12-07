// import React from "react";
import { Header, Divider } from "semantic-ui-react";
import SecretListContainer from "../secrets/SecretListContainer";
import PermittedUserListContainer from "../users/PermittedUserListContainer";
import { role } from "../../utils/role"
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
  const adminOnly = () => (
    <>
      <PermittedUserListContainer
        projectName={projectName}
        environment={environment}
        users={props.users}
      />
    </>
  )
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
      <SecretListContainer
        projectName={projectName}
        environment={environment}
        permissions={permissions}
      />
      {role === "admin" ? adminOnly() : ""}
    </div>
  );
};

export default Project;
