import { connect } from "react-redux";
import NewUserForm from "./NewUserForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newName) => {
      dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewUserForm);
