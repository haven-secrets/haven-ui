export default function projectsInfo(state = [], action) {
  switch (action.type) {
    case "GET_ALL_PROJECTS_INFO":
      return action.payload;
    default:
      return state;
  }
}
