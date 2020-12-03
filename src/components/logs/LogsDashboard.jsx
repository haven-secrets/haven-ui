import React from "react";
import LogList from "./LogList";
import { Dropdown, Header } from "semantic-ui-react";

const formatDropdownElements = (array, type) => {
  return array.map((element) => ({
    key: element,
    value: { value: element, type },
    text: element,
  }));
};

class LogsDashboard extends React.Component {
  state = {
    filteredLogs: [],
    projectSelected: "",
    userSelected: "",
    projects: [],
    users: [],
    environments: [],
  };

  componentDidMount() {
    this.props.fetchLogs();
  }

  resetInitialState() {
    if (
      this.props.logs?.length > 0 &&
      this.state.filteredLogs?.length === 0 &&
      !this.state.projectSelected &&
      !this.state.userSelected &&
      !this.state.environmentSelected
    ) {
      this.setInitialState();
    }
  }

  setInitialState() {
    const projects = [];
    const users = [];
    const environments = [];

    this.props.logs.forEach((log) => {
      if (!projects.includes(log["Project"].S)) projects.push(log["Project"].S);
      if (!users.includes(log["UserName"].S)) users.push(log["UserName"].S);
      if (!environments.includes(log["Environment"].S))
        environments.push(log["Environment"].S);
    });

    this.setState({
      projects,
      users,
      environments,
      filteredLogs: this.props.logs,
    });
  }

  handleChange = (e, { value }) => {
    let selected;
    if (value.type === "user") selected = "userSelected";
    else if (value.type === "project") selected = "projectSelected";
    else if (value.type === "environment") selected = "environmentSelected";
    else selected = e.currentTarget.parentNode.getAttribute("identifier");

    let filteredlogs;

    if (selected.startsWith("user")) {
      filteredlogs = this.filterLogs(
        this.state.projectSelected,
        value.value,
        this.state.environmentSelected
      );
    } else if (selected.startsWith("project")) {
      filteredlogs = this.filterLogs(
        value.value,
        this.state.userSelected,
        this.state.environmentSelected
      );
    } else {
      filteredlogs = this.filterLogs(
        this.state.projectSelected,
        this.state.userSelected,
        value.value
      );
    }
    this.setState({ [selected]: value.value, filteredLogs: filteredlogs });
  };

  DropdownExampleSearchSelection(placeholder, options, identifier) {
    return (
      <Dropdown
        identifier={identifier}
        onChange={this.handleChange}
        placeholder={placeholder}
        inline
        search
        selection
        clearable
        options={options}
      />
    );
  }

  filterLogs(project, user, environment, logs = this.props.logs) {
    if (![project, user, environment].some((selection) => selection))
      return logs;
    return logs.filter((log) => {
      return (
        (!project || log["Project"].S === project) &&
        (!user || log["UserName"].S === user) &&
        (!environment || log["Environment"].S === environment)
      );
    });
  }

  render() {
    this.resetInitialState();
    return (
      <div
        style={{
          marginTop: "12em",
        }}
      >
        <Header size="huge">Logs</Header>
        {this.DropdownExampleSearchSelection(
          "Project Selection",
          formatDropdownElements(this.state.projects, "project"),
          "projectSelected"
        )}
        {this.DropdownExampleSearchSelection(
          "User Selection",
          formatDropdownElements(this.state.users, "user"),
          "userSelected"
        )}
        {this.DropdownExampleSearchSelection(
          "Environment Selection",
          formatDropdownElements(this.state.environments, "environment"),
          "environmentSelected"
        )}
        <LogList logs={this.state.filteredLogs} />
      </div>
    );
  }
}

export default LogsDashboard;
