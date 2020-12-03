import { connect } from "react-redux";
import PermittedUserList from "./PermittedUserList";

const mapStateToProps = (state, ownProps) => {
  const project = `${ownProps.projectName}/${ownProps.environment}`;
  const permittedUsers = [];
  const disallowedUsers = [];
  state.users.forEach((user) => {
    if (
      user.groups.includes(`${project}/Write`) &&
      user.groups.includes(`${project}/Read`)
    ) {
      permittedUsers.push({
        userName: user.userName,
        write: true,
        read: true,
      });
    } else if (user.groups.includes(`${project}/Write`)) {
      permittedUsers.push({
        userName: user.userName,
        write: true,
        read: false,
      });
    } else if (user.groups.includes(`${project}/Read`)) {
      permittedUsers.push({
        userName: user.userName,
        write: false,
        read: true,
      });
    } else {
      disallowedUsers.push(user);
    }
  });

  return {
    permittedUsers,
    disallowedUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newName) => {
      dispatch({ type: "CREATE_USER_SUCCESS", payload: newName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermittedUserList);
