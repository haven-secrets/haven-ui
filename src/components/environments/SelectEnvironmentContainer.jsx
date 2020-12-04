import React from "react";
import SelectEnvironment from "./SelectEnvironment";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";

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
        payload: distillProjectsInfoFromGroups(groupsForUsers),
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectEnvironment);
