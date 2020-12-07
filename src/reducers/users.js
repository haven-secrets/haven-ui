import { usersData } from "../data/users.js";

export default function users(state = usersData, action) {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return action.payload;
    case "CREATE_USER_SUCCESS":
      return state.concat({ userName: action.payload, groups: [] });
    case "DELETE_USER_SUCCESS":
      return state.filter((user) => user.userName !== action.payload);
    case "ADD_USER_PERMISSION":
      return state.map((user) => {
        if (user.userName === action.payload.userName) {
          user.groups = user.groups.concat(...action.payload.groupNames);
        }
        return user;
      });
    case "REMOVE_USER_PERMISSION":
      return state.map((user) => {
        if (user.userName === action.payload.userName) {
          user.groups = user.groups.filter((group) => {
            return !group.startsWith(action.payload.project);
          });
        }
        return user;
      });
    case "DELETE_PROJECT":
      return state.map((user) => {
        user.groups = user.groups.filter((group) => {
          return !group.startsWith(action.payload);
        });
        return user;
      });
    case "EDIT_USER_PERMISSION":
      const { userName, project, canRead, canWrite } = action.payload;
      const edited = state.map((user) => {
        if (user.userName === userName) {
          user.groups = user.groups.filter((group) => {
            return !(
              (group === `${project}/Read` && !canRead) ||
              (group === `${project}/Write` && !canWrite)
            );
          });
          if (canRead && !user.groups.includes(`${project}/Read`)) {
            user.groups.concat(`${project}/Read`);
          } else if (canRead && !user.groups.includes(`${project}/Write`)) {
            user.groups.concat(`${project}/Write`);
          }
        }
        return user;
      });
    default:
      return state;
  }
}
