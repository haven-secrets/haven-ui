import "semantic-ui-css/semantic.min.css";
import UserDashboard from "./components/users/UserDashboard";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/common/Nav";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <UserDashboard />
    </Provider>
  );
}

export default App;
