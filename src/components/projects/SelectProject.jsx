import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SelectProject(props) {
  props.fetchProjectsInfo()
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">Projects</Header>
      <Header size="large">Select A Project:</Header>
      <List selection link animated size="huge">
        {props.projects.map((project) => {
          return (
            <List.Item key={project}>
              <List.Icon name="cubes" />
              <List.Content as={Link} to={`/projects/${project}`}>
                {project}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectProject;
