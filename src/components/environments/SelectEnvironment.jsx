import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SelectEnvironment(props) {
  const projectName = props.match.params.project;
  const ENVIRONMENTS = {Dev: "Development", Prod: "Production", Stg: "Staging"};
  if (!props.projectsInfo || props.projectsInfo.length === 0) {
    props.fetchProjectsInfo();
  }

  const environmentsObject = props.projectsInfo.find(
    (project) => project.projectName === projectName
  )?.environments;
  if (!environmentsObject) return "";
  const environments = Object.keys(environmentsObject);

  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">{projectName}</Header>
      <Header size="large">Select An Environment:</Header>
      <List selection link animated size="huge">
        {environments.map((environment, i) => {
          return (
            <List.Item key={i}>
              <List.Icon name="cogs" />
              <List.Content
                as={Link}
                to={`/projects/${projectName}/${environment}`}
              >
                {ENVIRONMENTS[environment]}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectEnvironment;
