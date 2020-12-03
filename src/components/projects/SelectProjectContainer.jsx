import React from "react";
import SelectProject from "./SelectProject";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";

const distillProjectsInfoFromGroups = (array) => {
  const projectsInfo = [];

  for (let i = 0; i < array.length; i++) {
    const groupInfo = array[i]
      .match(/^HavenSecrets.*(Dev|Prod|Stg)(|Read|Write)Group$/)
      ?.slice(0, 3);
    if (groupInfo) {
      const [groupName, environments, permissions] = groupInfo.slice(0, 3);

      const projectName = groupName.slice(12, groupName.indexOf(environments));
      const existingProject = projectsInfo.find(
        (project) => project.projectName === projectName
      );
      if (existingProject) {
        if (existingProject.environments[environments]) {
          existingProject.environments[environments].push(permissions);
        } else {
          existingProject.environments[environments] = [permissions];
        }
      } else
        projectsInfo.push({
          projectName,
          environments: { [environments]: [permissions] },
        });
    }
  }
  return projectsInfo;
};

const projectsInfo = distillProjectsInfoFromGroups(groupsForUsers);

const mapStateToProps = (state) => {
  return {
    projectsInfo: state.projectsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectsInfo: () => {
      dispatch({
        type: "GET_ALL_PROJECTS_INFO",
        payload: projectsInfo,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProject);
