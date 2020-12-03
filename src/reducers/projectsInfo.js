export default function projectsInfo(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_ALL_PROJECTS_INFO":
      return action.payload;
    default:
      return state;
  }
}
