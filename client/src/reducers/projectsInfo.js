export default function projectsInfo(state = [], action) {
  switch (action.type) {
    case "GET_ALL_PROJECTS_INFO":
      return action.payload;
    case "CREATE_NEW_PROJECT":
      return state.concat(action.payload);
    case "DELETE_PROJECT":
      return state.filter((project) => project.projectName !== action.payload);
    default:
      return state;
  }
}
