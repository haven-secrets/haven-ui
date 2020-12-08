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
    createNewProject: (projectName) => {
      const projectObject = createProjectObject(projectName);
      dispatch({
        type: "CREATE_NEW_PROJECT",
        payload: projectObject,
      });
    },
    deleteProject: (projectName) => {
      dispatch({ type: "DELETE_PROJECT", payload: projectName });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProjectDashboard);
