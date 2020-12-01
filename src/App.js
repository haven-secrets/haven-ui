import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store.js";
import "./App.css";
import UserDashboard from "./components/users/UserDashboard";
import HavenHeader from "./components/common/HavenHeader.js";
import SelectProject from "./components/SelectProject.js";
import SelectEnvironment from "./components/SelectEnvironment.js";
import Generic from "./components/Generic.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <HavenHeader />

          <Switch>
            <Route path="/" exact render={SelectProject} />
            <Route path="/projects" exact render={SelectProject} />
            <Route path="/users" exact render={UserDashboard} />
            <Route path="/logs" exact render={Generic} />
            <Route path="/:project/:environment" render={Generic} />
            <Route path="/:project" render={SelectEnvironment} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
