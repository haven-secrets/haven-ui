const userTestArray = [
  {
    userName: "Developer 1",
    groups: ["Todos/Development/Write", "Todos/Development/Read"],
  },
  {
    userName: "Developer 2",
    groups: ["Todos/Development/Write"],
  },
  {
    userName: "Server 1",
    groups: ["Todos/Production/Write", "Todos/Production/Read"],
  },
  {
    userName: "Server 2",
    groups: ["AirlineRoutes/Production/Write", "AirlineRoutes/Production/Read"],
  },
];

export default function users(state = userTestArray, action) {
  switch (action.type) {
    case "CREATE_USER_SUCCESS":
      return state.concat({ userName: action.payload, groups: [] });
    case "DELETE_USER_SUCCESS":
      return state.filter((user) => user.userName !== action.payload);
    default:
      return state;
  }
}
