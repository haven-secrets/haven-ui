export default function users(state = [], action) {
  switch (action.type) {
    case "CREATE_USER_SUCCESS":
      return state.concat(action.payload);
    case "DELETE_USER_SUCCESS":
      return state.filter((username) => username !== action.payload);
    default:
      return state;
  }
}
