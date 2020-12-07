import React from "react";
import SelectProject from "./SelectProject";
import NewProjectForm from "./NewProjectForm";
import { Segment } from "semantic-ui-react";

const SelectProjectDashboard = (props) => {
  const projects = props.projectsInfo.map((project) => project.projectName);
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <SelectProject
        fetchProjectsInfo={props.fetchProjectsInfo}
        projects={projects}
        deleteProject={props.deleteProject}
      />
      <Segment>
        <NewProjectForm
          projects={projects}
          createNewProject={props.createNewProject}
        />
      </Segment>
    </div>
  );
};

export default SelectProjectDashboard;
