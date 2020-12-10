import { connect } from "react-redux";
import axios from "axios";
import PermittedUserList from "./PermittedUserList";

const mapStateToProps = (state, ownProps) => {
  const project = `${ownProps.projectName}/${ownProps.environment}`;
  const permittedUsers = [];
  const disallowedUsers = [];

  state.users.forEach((user) => {
    if (user.userName === "HavenSecretsAdmin") {
    } else if (
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
      const coreGroupNames = groups.map(
        (group) =>
          `HavenSecrets${ownProps.projectName}${ownProps.environment}${group}Group`
      );
      axios
        .post("http://localhost:5000/api/addUserToProject/" + userName, {
          data: { groups: coreGroupNames },
        })
        .then(() =>
          dispatch({
            type: "ADD_USER_PERMISSION",
            payload: { userName, groupNames },
          })
        );
    },
    removePermissions: (userName, groups) => {
      const groupNames = groups.map((group) => `${project}/${group}`);
      const coreGroupNames = groups.map(
        (group) =>
          `HavenSecrets${ownProps.projectName}${ownProps.environment}${group}Group`
      );
      axios
        .delete("http://localhost:5000/api/revokeUserFromGroups/" + userName, {
          data: { groups: coreGroupNames },
        })
        .then(() =>
          dispatch({
            type: "REMOVE_USER_PERMISSION",
            payload: { userName, groupNames },
          })
        );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermittedUserList);
