import { useEffect } from "react";
import { Header } from "semantic-ui-react";
import SecretListContainer from "../secrets/SecretListContainer";
import PermittedUserListContainer from "../users/PermittedUserListContainer";
import { role } from "../../utils/role";

const Project = (props) => {
  useEffect(() => {
    props.getAllProjectInfo();
  }, [])

  const projectName = props.match.params.project;
  const environment = props.match.params.environment;

  const adminOnly = () => (
    <>
      <PermittedUserListContainer
        projectName={projectName}
        environment={environment}
        users={props.users}
      />
    </>
  );

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
        permissions={props.projectEnvPermissions}
      />
      {role === "admin" ? adminOnly() : ""}
    </div>
  );
};

export default Project;
