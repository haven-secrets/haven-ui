import { connect } from "react-redux";
import axios from "axios";
import SelectProjectDashboard from "./SelectProjectDashboard";

import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";
import createProjectObject from "../../utils/createProjectObject";

const mapStateToProps = (state) => {
  return {
    projectsInfo: state.projectsInfo,
    role: state.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjectInfo: () => {
      axios.get("http://localhost:5000/api/listGroupsForUser").then((res) => {
        const projectInfo = distillProjectsInfoFromGroups(res.data);
        dispatch({
          type: "GET_ALL_PROJECTS_INFO",
          payload: projectInfo,
        });
      });
    },
    createNewProject: (projectName) => {
      return axios
        .post("http://localhost:5000/api/projects/" + projectName)
        .then((res) => {
          const projectObject = createProjectObject(projectName);
          dispatch({
            type: "CREATE_NEW_PROJECT",
            payload: projectObject,
          });
          return res;
        });
    },
    deleteProject: (projectName) => {
      return axios
        .delete("http://localhost:5000/api/projects/" + projectName)
        .then((res) => {
          dispatch({ type: "DELETE_PROJECT", payload: projectName });
          return res;
        });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProjectDashboard);
