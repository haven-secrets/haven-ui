import React from "react";
import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

// TODO: maybe actually we render either SelectProject,
//   SelectEnvironment, or a Project component depending on the state
class SelectProject extends React.Component {
  componentDidMount() {
    this.props.fetchProjectsInfo();
  }

  render() {
    return (
      <div
        class="indentedList"
        style={{
          marginTop: "12em",
        }}
      >
        <Header size="huge">Select A Project:</Header>
        <List link>
          {this.props.projectsInfo.map((projectInfo) => {
            console.log(projectInfo);
            return (
              <List.Item>
                <Link to={`/${projectInfo.projectName}`}>
                  {projectInfo.projectName}
                </Link>
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
}

export default SelectProject;
