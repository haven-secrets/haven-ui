import React from "react";
import Project from "./Project";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";

const projectInfo = distillProjectsInfoFromGroups(groupsForUsers);

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
        payload: projectInfo,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);