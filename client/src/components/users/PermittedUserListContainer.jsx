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
    project,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const project = `${ownProps.projectName}/${ownProps.environment}`;
  return {
    addUserToProject: (userName, groups) => {
      const groupNames = groups.map((group) => `${project}/${group}`);
      dispatch({
        type: "ADD_USER_PERMISSION",
        payload: { userName, groupNames },
      });
    },
    removePermissions: (userName) => {
      dispatch({
        type: "REMOVE_USER_PERMISSION",
        payload: { userName, project }
      })
    },
    editPermissions: (userName, canRead, canWrite) => {
      dispatch({
        type: "EDIT_USER_PERMISSION",
        payload: { userName, project, canRead, canWrite }
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermittedUserList);
