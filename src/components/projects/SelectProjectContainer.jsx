import React from "react";
import SelectProject from "./SelectProject";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";

const projectsInfo = distillProjectsInfoFromGroups(groupsForUsers);

const mapStateToProps = (state) => {
  return {
    projects: state.projectsInfo.map(projectInfo => projectInfo.projectName),
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
