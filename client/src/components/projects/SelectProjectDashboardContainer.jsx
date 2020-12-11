import { connect } from "react-redux";
import axios from "axios";
import SelectProjectDashboard from "./SelectProjectDashboard";

import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";
import createProjectObject from "../../utils/createProjectObject";

const mapStateToProps = (state) => {
  return {
    projectsInfo: state.projectsInfo,
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
      axios
        .post("http://localhost:5000/api/projects/" + projectName)
        .then(() => {
          const projectObject = createProjectObject(projectName);
          dispatch({
            type: "CREATE_NEW_PROJECT",
            payload: projectObject,
          });
        });
    },
    deleteProject: (projectName) => {
      axios
        .delete("http://localhost:5000/api/projects/" + projectName)
        .then(() => {
          dispatch({ type: "DELETE_PROJECT", payload: projectName });
        });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProjectDashboard);
