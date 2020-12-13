import React, { useEffect, useState } from "react";
import SelectProject from "./SelectProject";
import NewProjectForm from "./NewProjectForm";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

const SelectProjectDashboard = ({
  getAllProjectInfo,
  createNewProject,
  projectsInfo,
  deleteProject,
  fetchRole,
  role,
}) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const [loadingProject, setLoadingProject] = useState(null);

  useEffect(() => {
    getAllProjectInfo();
    fetchRole();
  }, [getAllProjectInfo, fetchRole]);

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
          createNewProject={createNewProject}
          loadingStatus={loadingStatus}
          renderLoadingScreen={renderLoadingScreen}
        />
      </Segment>
    </>
  );
  const projects = projectsInfo.map((project) => project.projectName);
  return (
    <div
      style={{
        marginTop: "12em",
      }}
    >
      <Dimmer active={loadingStatus} inverted>
        <Loader size="large" inverted>
          {`Haven is ${loadingAction} ${loadingProject}. \n
        This should take 30-60 seconds.`}
        </Loader>
      </Dimmer>
      <SelectProject
        projects={projects}
        deleteProject={deleteProject}
        role={role}
        loadingStatus={loadingStatus}
        renderLoadingScreen={renderLoadingScreen}
      />
      {role === "Admin" ? adminOnly() : ""}
    </div>
  );
};

export default SelectProjectDashboard;
