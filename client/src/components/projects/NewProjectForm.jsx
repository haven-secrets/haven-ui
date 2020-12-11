import React from "react";
import { Container, Button, Form, Message, Segment } from "semantic-ui-react";

class NewProjectForm extends React.Component {
  state = {
    name: "",
    projectError: false,
  };

  onCreateProject = async (e) => {
    if (
      this.state.name.trim().length === 0 ||
      this.props.projects.includes(this.state.name.trim())
    ) {
      this.setState({ projectError: true, name: "" });
    } else {
      this.props.renderLoadingScreen(this.state.name, "creating");
      await this.props.createNewProject(this.state.name.trim());
      this.props.renderLoadingScreen();
      this.setState({ name: "" });
    }
  };

  onInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  atMaxProjects = () => {
    return (
      <>
        <Segment>You are at the maximum supported projects limit.</Segment>
      </>
    );
  };

  render() {
    return (
      <Container>
        <Form error={this.state.projectError}>
          <Form.Input
            placeholder="Example Project"
            onChange={this.onInputChange}
            value={this.state.name}
            onClick={() => this.setState({ projectError: false })}
            disabled={this.props.projects.length > 1}
          />
          <Button
            type="submit"
            onClick={this.onCreateProject}
            disabled={this.props.projects.length > 1}
          >
            Create Project
          </Button>
          <Message
            error
            header="Action Forbidden"
            content="Project must have unique name."
          />
        </Form>
        {this.props.projects.length > 1 ? this.atMaxProjects() : ""}
      </Container>
    );
  }
}

export default NewProjectForm;
