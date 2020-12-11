import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function SelectEnvironment(props) {

  useEffect(() => {
    props.getAllProjectInfo();
  }, [])

  const projectName = props.match.params.project;
  const environmentMapping = {Dev: "Development", Prod: "Production", Stg: "Staging"};
  const environments = Object.keys(props.projectEnvironments);

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
                {environmentMapping[environment]}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectEnvironment;
