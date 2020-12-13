import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import store from "./store";

import UserDashboardContainer from "./components/users/UserDashboardContainer";
import NavContainer from "./components/common/NavContainer";

import SelectEnvironmentContainer from "./components/environments/SelectEnvironmentContainer";
import LogsDashboardContainer from "./components/logs/LogsDashboardContainer";
import "semantic-ui-css/semantic.min.css";
import ProjectContainer from "./components/projects/ProjectContainer";
import SelectProjectDashboardContainer from "./components/projects/SelectProjectDashboardContainer";

function App() {
  return (
    <Container textAlign="left">
      <Provider store={store}>
        <Router>
          <NavContainer />
          <Switch>
            <Route path="/" exact component={SelectProjectDashboardContainer} />
            <Route
              path="/projects"
              exact
              component={SelectProjectDashboardContainer}
            />
            <Route
              path="/projects/:project/:environment"
              component={ProjectContainer}
            />
            <Route
              path="/projects/:project"
              component={SelectEnvironmentContainer}
            />
            <Route path="/users" exact component={UserDashboardContainer} />
            <Route path="/logs" exact component={LogsDashboardContainer} />
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
