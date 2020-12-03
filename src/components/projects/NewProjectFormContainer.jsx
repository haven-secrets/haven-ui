import { connect } from "react-redux";
import NewProjectForm from "./NewProjectForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newName) => {
      dispatch({ type: "CREATE_PROJECT_SUCCESS", payload: newName });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewProjectForm);
