export default function logs(state = [], action) {
  switch (action.type) {
    case "GET_ALL_LOGS":
      return action.payload;
    case "PUT_SECRET_SUCCESS":
      return state;
    case "GET_SECRET_SUCCESS":
      return state;
    default:
      return state;
  }
}
