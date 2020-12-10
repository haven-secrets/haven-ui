import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import UserDashboard from "./UserDashboard";
import { Header, List } from "semantic-ui-react";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => {
      axios
        .get("http://localhost:5000/api/users")
        .then((res) =>
          dispatch({ type: "FETCH_ALL_USERS", payload: res.data })
        );
    },
    onDeleteUser: (userName) => {
      axios
        .delete("http://localhost:5000/api/users/" + userName)
        .then(() =>
          dispatch({ type: "DELETE_USER_SUCCESS", payload: userName })
        );
    },
    addNewUser: (newName) => {
      // axios
      // .post("http://localhost:5000/api/users/" + newName)
      // .then(() =>
      dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
      // );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
