import React from "react";
import { Container, Button, Form } from "semantic-ui-react";

class NewProjectForm extends React.Component {
  state = {
    name: "",
  };

  onCreateProject = (e) => {
    // TODO: make AWS call here
    if (
      this.state.name.trim().length === 0 ||
      this.props.projects.includes(this.state.name.trim())
    ) {
    } else this.props.createNewProject(this.state.name.trim());

    this.setState({ name: "" });
  };

  onInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Input
            placeholder="Example Project"
            onChange={this.onInputChange}
            value={this.state.name}
          />
          <Button type="submit" onClick={this.onCreateProject}>
            Create Project
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewProjectForm;
