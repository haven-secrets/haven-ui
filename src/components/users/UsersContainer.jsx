import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { Container, Header, List, Button, Divider } from "semantic-ui-react";

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
  };
};

function UsersContainer({ users, onDeleteUser }) {
  return (
    <div id="users-container">
      <Header size="large">Users</Header>
      <List animated verticalAlign="middle" size="huge">
        {users.map((user, i) => (
          <User userName={user} key={i} />
        ))}
      </List>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
