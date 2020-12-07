import React from "react";
import { connect } from "react-redux";
import UserDashboard from "./UserDashboard";
import { Header, List } from "semantic-ui-react";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (userName) => {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: userName });
    },
    addNewUser: (newName) => {
      dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
