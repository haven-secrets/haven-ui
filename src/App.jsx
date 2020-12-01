import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import store from "./store";
import "./App.css";
import UserDashboard from "./components/users/UserDashboard";
import HavenHeader from "./components/common/HavenHeader";
import SelectProject from "./components/SelectProject";
import SelectEnvironment from "./components/SelectEnvironment";
import Logs from "./components/logs/Logs";
import Project from "./components/Project";

function App() {
  return (
    <Container textAlign="left">
      <Provider store={store}>
        <Router>
          <HavenHeader />

          <Switch>
            <Route path="/" exact render={SelectProject} />
            <Route path="/projects" exact render={SelectProject} />
            <Route path="/users" exact render={UserDashboard} />
            <Route path="/logs" exact render={() => <Logs />} />
            <Route path="/:project/:environment" render={Project} />
            <Route path="/:project" render={SelectEnvironment} />
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
