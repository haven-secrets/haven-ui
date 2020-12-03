import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SelectEnvironment({ match }) {
  const projectName = match.params.project;
  const ENVIRONMENTS = ["Development", "Production", "Staging"];

  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">{projectName}</Header>
      <Header size="large">Select An Environment:</Header>
      <List selection link animated size="huge">
        {ENVIRONMENTS.map((environment, i) => {
          return (
            <List.Item key={i}>
              <List.Icon name="cogs" />
              <List.Content
                as={Link}
                to={`/projects/${projectName}/${environment}`}
              >
                {environment}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectEnvironment;
