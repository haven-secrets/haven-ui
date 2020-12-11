import React, { useEffect, useState } from "react";
import SelectProject from "./SelectProject";
import NewProjectForm from "./NewProjectForm";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import { role } from "../../utils/role";

const SelectProjectDashboard = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const [loadingProject, setLoadingProject] = useState(null);
  useEffect(() => {
    props.getAllProjectInfo();
  }, []);

  const renderLoadingScreen = (project, action) => {
    if (!project && !action) {
      setLoadingStatus(false);
      setLoadingAction(null);
      setLoadingProject(null);
    } else {
      setLoadingStatus(true);
      setLoadingProject(project);
      setLoadingAction(action);
    }
  };

  const adminOnly = () => (
    <>
      <Segment>
        <NewProjectForm
          projects={projects}
          createNewProject={props.createNewProject}
          loadingStatus={loadingStatus}
          renderLoadingScreen={renderLoadingScreen}
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
      <Dimmer active={loadingStatus} inverted>
        <Loader size='large' inverted>{`Haven is ${loadingAction} ${loadingProject}. \n
        This should take 30-60 seconds.`}
        </Loader>
      </Dimmer>
      <SelectProject
        fetchProjectsInfo={props.fetchProjectsInfo}
        projects={projects}
        deleteProject={props.deleteProject}
        role={role}
        loadingStatus={loadingStatus}
        renderLoadingScreen={renderLoadingScreen}
      />
      {role === "admin" ? adminOnly() : ""}
    </div>
  );
};

export default SelectProjectDashboard;
