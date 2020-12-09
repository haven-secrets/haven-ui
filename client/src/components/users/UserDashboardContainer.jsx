import React from "react";
import { connect } from "react-redux";
import UserDashboard from "./UserDashboard";
import { Header, List } from "semantic-ui-react";

const allUsers = fetch("http://localhost:5000/api/getAllUsers")
  .then((res) => res.json())
  .then((data) => (data));

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllUsers: (users) => {
    //   dispatch({ type: "FETCH_ALL_USERS", payload: userName });
    // },
    onDeleteUser: (userName) => {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: userName });
    },
    addNewUser: (newName) => {
      dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
