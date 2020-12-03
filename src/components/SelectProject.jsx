import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

// TODO: maybe actually we render either SelectProject,
//   SelectEnvironment, or a Project component depending on the state
function SelectProject() {
  const HARDCODED_PROJECT_NAMES = ["Todos", "AirlineRoutes"];

  return (
    <div
      class="indentedList"
      style={{
        marginTop: "12em",
      }}
    >
      <Header size="huge">Select A Project:</Header>
      <List link>
        {HARDCODED_PROJECT_NAMES.map((projectName) => {
          return (
            <List.Item>
              <Link to={`/${projectName}`}>{projectName}</Link>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default SelectProject;
