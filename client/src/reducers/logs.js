export default function logs(state = [], action) {
  switch (action.type) {
    case "GET_ALL_LOGS":
      return action.payload;
    default:
      return state;
  }
}
