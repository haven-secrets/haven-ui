export default function users(state = [], action) {
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
            return !action.payload.groupNames.includes(group);
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
      break;
    default:
      return state;
  }
}
