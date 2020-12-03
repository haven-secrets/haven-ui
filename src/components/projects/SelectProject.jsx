import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SelectProject(props) {
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">Projects</Header>
      <Header size="large">Select A Project:</Header>
      <List selection link animated size="huge">
        {props.projects.map((projectName, i) => {
          return (
            <List.Item key={i}>
              <List.Icon name="cubes" />
              <List.Content as={Link} to={`/projects/${projectName}`}>
                {projectName}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectProject;
