import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import store from "./store";

import UserDashboard from "./components/users/UserDashboard";
import Nav from "./components/common/Nav";

import SelectEnvironment from "./components/SelectEnvironment";
import LogsDashboardContainer from "./components/logs/LogsDashboardContainer";
import Project from "./components/projects/Project";
import SelectProjectDashboard from "./components/projects/SelectProjectDashboard";

function App() {
  return (
    <Container textAlign="left">
      <Provider store={store}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact render={SelectProjectDashboard} />
            <Route path="/projects" exact render={SelectProjectDashboard} />
            <Route path="/users" exact render={UserDashboard} />
            <Route path="/logs" exact component={LogsDashboardContainer} />
            <Route path="/projects/:project/:environment" render={Project} />
            <Route path="/projects/:project" render={SelectEnvironment} />
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
