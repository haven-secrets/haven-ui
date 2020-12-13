export default function projectsInfo(state = "", action) {
  switch (action.type) {
    case "GET_ROLE":
      return action.payload;
    default:
      return state;
  }
}
