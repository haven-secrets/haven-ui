const testState = ["Todos", "AirlineRoutes", "TicTacToe"];

export default function projects(state = testState, action) {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      return state.concat(action.payload);
    default:
      return state;
  }
}
