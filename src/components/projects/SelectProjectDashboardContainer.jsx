import React from "react";
import SelectProjectDashboard from "./SelectProjectDashboard";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";
import createProjectObject from "../../utils/createProjectObject";

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
    createNewProject: (projectName) => {
      const projectObject = createProjectObject(projectName);
      dispatch({
        type: "CREATE_NEW_PROJECT",
        payload: projectObject,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProjectDashboard);
