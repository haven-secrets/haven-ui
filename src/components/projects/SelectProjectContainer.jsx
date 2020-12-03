import { connect } from "react-redux";
import SelectProject from "./SelectProject";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, null)(SelectProject);
