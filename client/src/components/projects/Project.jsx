import { useEffect } from "react";
import { Header } from "semantic-ui-react";
import SecretListContainer from "../secrets/SecretListContainer";
import PermittedUserListContainer from "../users/PermittedUserListContainer";

const Project = ({
  getAllProjectInfo,
  match,
  users,
  projectEnvPermissions,
  role,
}) => {
  useEffect(() => {
    getAllProjectInfo();
  }, [getAllProjectInfo]);

  const projectName = match.params.project;
  const environment = match.params.environment;

  const adminOnly = () => (
    <>
      <PermittedUserListContainer
        projectName={projectName}
        environment={environment}
        users={users}
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
        permissions={projectEnvPermissions}
      />
      {role === "Admin" ? adminOnly() : ""}
    </div>
  );
};

export default Project;
