import React from "react";
import { Container, Button, Form } from "semantic-ui-react";

class NewUserForm extends React.Component {
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
            label="Username"
            placeholder="Developer"
            onChange={this.onInputChange}
            value={this.state.name}
          />
          <Button type="submit" onClick={this.onSubmitNewUser}>
            Create User
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewUserForm;
