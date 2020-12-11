import Project from "./Project";
import { connect } from "react-redux";
import axios from "axios";
import distillProjectsInfoFromGroups from "../../utils/distillProjectsInfoFromGroups";


const mapStateToProps = (state, ownProps) => {

  const selectedProject = state.projectsInfo.find(project => project.projectName === ownProps.match.params.project);
  const selectedEnvironment = ownProps.match.params.environment
  return {
    projectEnvPermissions: selectedProject?.environments?.[selectedEnvironment] || []
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
