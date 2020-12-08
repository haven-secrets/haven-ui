import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import store from "./store";
import { role } from "./utils/role";

import UserDashboardContainer from "./components/users/UserDashboardContainer";
import Nav from "./components/common/Nav";

import SelectEnvironmentContainer from "./components/environments/SelectEnvironmentContainer";
import LogsDashboardContainer from "./components/logs/LogsDashboardContainer";
import "semantic-ui-css/semantic.min.css";
import ProjectContainer from "./components/projects/ProjectContainer";
import SelectProjectDashboardContainer from "./components/projects/SelectProjectDashboardContainer";

function App() {
  const adminRoutes = () => (
    <>
      <Route path="/users" exact component={UserDashboardContainer} />
      <Route path="/logs" exact component={LogsDashboardContainer} />
    </>
  );
  return (
    <Container textAlign="left">
      <Provider store={store}>
        <Router>
          <Nav />
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
            {role === "admin" ? adminRoutes() : ""}
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
