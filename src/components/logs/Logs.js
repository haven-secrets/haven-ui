import React from "react";
import LogList from "./LogList";
import { Dropdown } from "semantic-ui-react";

const logs = [
  {
    Project: { S: "todo" },
    SecretName: { S: "happy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:16:16 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "t04d25db5-7e43-40e4-8520-aaba8750160a" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "sad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:20:47 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "t66b1ebe7-89a1-4223-b8b8-db313492a8fb" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "happy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:16:19 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "tfe5e6e38-7c3e-404a-93da-a8c882f31ae0" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "sad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:21:02 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "tb3dcac3e-961f-473a-9197-6de3f461bb6c" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "happy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:20:47 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "t920512ea-179e-4833-a997-0cea5edb240f" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "sad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:34 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "t9e4017a7-fe67-4fd4-8a88-09d45cb29712" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "important" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:55 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "tbde4e456-4748-487b-acec-b982890bd67e" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "prod" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "important" },
    DateTime: { S: "Mon, 30 Nov 2020 20:15:09 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "t9651687e-de2d-4cec-b9da-0d0da3fcc527" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "prod" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "happy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:24 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "tb0978dfd-c76d-42a4-93c8-2ac21feeb519" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "sad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:15:16 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "t620c0049-12df-4490-b1a3-82cec0366f9f" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "todo" },
    SecretName: { S: "happy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:21:02 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "t85283158-ff9c-4ee1-9db9-9021f4ff7662" },
    UserName: { S: "HavenSecretsAdmin" },
    Environment: { S: "dev" },
  },

  {
    Project: { S: "blog" },
    SecretName: { S: "quiteHappy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:16:16 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "04d25db5-7e43-40e4-8520-aaba8750160a" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "prettySad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:20:47 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "66b1ebe7-89a1-4223-b8b8-db313492a8fb" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "quiteHappy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:16:19 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "fe5e6e38-7c3e-404a-93da-a8c882f31ae0" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "prettySad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:21:02 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "b3dcac3e-961f-473a-9197-6de3f461bb6c" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "quiteHappy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:20:47 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "920512ea-179e-4833-a997-0cea5edb240f" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "prettySad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:34 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "9e4017a7-fe67-4fd4-8a88-09d45cb29712" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "important" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:55 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "bde4e456-4748-487b-acec-b982890bd67e" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "prod" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "important" },
    DateTime: { S: "Mon, 30 Nov 2020 20:15:09 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "9651687e-de2d-4cec-b9da-0d0da3fcc527" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "prod" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "quiteHappy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:14:24 GMT" },
    Response: { S: "Successful" },
    EventType: { S: "put" },
    Version: { S: "1" },
    PK: { S: "b0978dfd-c76d-42a4-93c8-2ac21feeb519" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "prettySad" },
    DateTime: { S: "Mon, 30 Nov 2020 20:15:16 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "get" },
    Version: { S: "1" },
    PK: { S: "620c0049-12df-4490-b1a3-82cec0366f9f" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
  {
    Project: { S: "blog" },
    SecretName: { S: "quiteHappy" },
    DateTime: { S: "Mon, 30 Nov 2020 20:21:02 GMT" },
    Response: { S: "Succcessful" },
    EventType: { S: "getAll" },
    Version: { S: "1" },
    PK: { S: "85283158-ff9c-4ee1-9db9-9021f4ff7662" },
    UserName: { S: "HavenSecretsDev1" },
    Environment: { S: "dev" },
  },
];

let projects = [];
let users = [];

logs.forEach((log) => {
  if (!projects.includes(log["Project"].S)) projects.push(log["Project"].S);
  if (!users.includes(log["UserName"].S)) users.push(log["UserName"].S);
});

const formatDropdownElements = (array, type) =>
  array.map((element) => {
    return { key: element, value: { value: element, type }, text: element };
  });

class Logs extends React.Component {
  state = {
    filteredlogs: logs,
    projectSelected: "",
    userSelected: "",
  };

  handleChange = (e, { value }) => {
    let selected;
    if (value.type === "user") selected = "userSelected";
    else if (value.type === "project") selected = "projectSelected";
    else selected = e.currentTarget.parentNode.getAttribute("stateName");
    console.log(selected);
    const filteredlogs = selected.startsWith("user")
      ? this.filterLogs(this.state.projectSelected, value.value)
      : this.filterLogs(value.value, this.state.userSelected);
    console.log(filteredlogs);
    this.setState({ [selected]: value.value, filteredlogs: filteredlogs });
  };

  DropdownExampleSearchSelection = (placeholder, options, stateName) => (
    <Dropdown
      stateName={stateName}
      onChange={this.handleChange}
      placeholder={placeholder}
      inline
      search
      selection
      clearable
      options={options}
    />
  );

  filterLogs = (project, user) => {
    if (![project, user].some((selection) => selection)) return logs;
    return logs.filter((log) => {
      return (
        (!project || log["Project"].S === project) &&
        (!user || log["UserName"].S === user)
      );
    });
  };

  selectedProjectChanged = (project) => {
    const filteredByProject = this.filterLogs(project, this.state.userSelected);
    this.setState({
      projectSelected: project,
      filteredlogs: filteredByProject,
    });
  };

  selectedUserChanged = (user) => {
    const filteredByUser = this.filterLogs(this.state.projectSelected, user);
    this.setState({
      userSelected: user,
      filteredlogs: filteredByUser,
    });
  };

  resetFilters = () => {
    const selects = [...document.getElementsByTagName("select")];
    selects.forEach((select) => {});

    this.setState({
      userSelected: "",
      projectSelected: "",
      filteredlogs: logs,
    });
  };
  render() {
    return (
      <div>
        <h1>Logs</h1>
        {this.DropdownExampleSearchSelection(
          "Project Selection",
          formatDropdownElements(projects, "project"),
          "projectSelected"
        )}
        {this.DropdownExampleSearchSelection(
          "User Selection",
          formatDropdownElements(users, "user"),
          "userSelected"
        )}
        <LogList logs={this.state.filteredlogs} />
      </div>
    );
  }
}

export default Logs;
