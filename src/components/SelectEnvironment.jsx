import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SelectEnvironment({ match }) {
  const projectName = match.params.project;
  const ENVIRONMENTS = ["Development", "Production", "Staging"]; // TEMPORARY

  return (
    <div class="indentedList">
      <Header size="large">{projectName}</Header>
      <Header size="medium">Select An Environment:</Header>
      <List link>
        {ENVIRONMENTS.map((environment) => {
          return (
            <List.Item>
              <Link to={`/${projectName}/${environment}`}>{environment}</Link>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectEnvironment;
