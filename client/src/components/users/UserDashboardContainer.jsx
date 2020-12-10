import { connect } from "react-redux";
import axios from "axios";
import UserDashboard from "./UserDashboard";

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
      return axios
        .post("http://localhost:5000/api/users/" + newName)
        .then((res) => {
          dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
          return res;
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
