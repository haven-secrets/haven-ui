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
        {props.projectsInfo.map((projectInfo) => {
          return (
            <List.Item key={projectInfo.projectName}>
              <List.Icon name="cubes" />
              <List.Content as={Link} to={`/projects/${projectInfo.projectName}`}>
                {projectInfo.projectName}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectProject;
