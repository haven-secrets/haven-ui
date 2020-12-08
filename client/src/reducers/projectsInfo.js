import { groupsForUsers } from "../data/groupsForUsers.js";
import distillProjectsInfoFromGroups from "../utils/distillProjectsInfoFromGroups";
const projectsInfoData = distillProjectsInfoFromGroups(groupsForUsers);

export default function projectsInfo(state = projectsInfoData, action) {
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
