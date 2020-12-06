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

// function UsersContainer({ users, onDeleteUser }) {
//   return (
//     <div id="users-container">
//       <Header size="huge">Users</Header>
//       <List animated size="huge">
//         {users.map((user, i) => (
//           <User userName={user.userName} key={i} onDeleteUser={onDeleteUser} />
//         ))}
//       </List>
//     </div>
//   );
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
