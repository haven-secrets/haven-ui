import React from "react";
import { Container, Button, Form } from "semantic-ui-react";

class NewProjectForm extends React.Component {
  state = {
    name: "",
  };

  onSubmitNewUser = (e) => {
    this.props.onSubmit(this.state.name);
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
          <Button type="submit" onClick={this.onSubmitNewUser}>
            Create Project
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewProjectForm;
