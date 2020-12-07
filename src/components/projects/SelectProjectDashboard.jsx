import React from "react";
import SelectProject from "./SelectProject";
import NewProjectForm from "./NewProjectForm";
import { Segment } from "semantic-ui-react";
import { role } from "../../utils/role";

const SelectProjectDashboard = (props) => {
  const adminOnly = () => (
    <>
      <Segment>
        <NewProjectForm
          projects={projects}
          createNewProject={props.createNewProject}
        />
      </Segment>
    </>
  );
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
        role={role}
      />
      {role === "admin" ? adminOnly() : ""}
    </div>
  );
};

export default SelectProjectDashboard;
