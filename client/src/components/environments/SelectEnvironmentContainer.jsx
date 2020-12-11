import SelectEnvironment from "./SelectEnvironment";
import { connect } from "react-redux";
import { groupsForUsers } from "../../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";
import axios from "axios";


const mapStateToProps = (state, ownProps) => {
  const selectedProject = state.projectsInfo.find(project => project.projectName === ownProps.match.params.project);
  return {
    projectEnvironments: selectedProject?.environments || {},
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectEnvironment);
