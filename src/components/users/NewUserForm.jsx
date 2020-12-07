import React from "react";
import { Button, Form } from "semantic-ui-react";
import fileDownload from "js-file-download";
import * as temporaryUserCredentials from "../../utils/temporaryUserCredentials";

const temporaryUserCredentialsJSON = temporaryUserCredentials.default;

class NewUserForm extends React.Component {
  state = {
    name: "",
  };

  onSubmitNewUser = (e) => {
    const users = this.props.users.map((user) => user.userName);
    if (this.state.name.trim() && !users.includes(this.state.name.trim())) {
      this.props.addNewUser(this.state.name);
      fileDownload(
        JSON.stringify(temporaryUserCredentialsJSON),
        "temporaryUserCredentials.json"
      );
    }
    this.setState({ name: "" });
  };

  onInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <Form>
        <Form.Input
          label="Username"
          placeholder="Developer"
          onChange={this.onInputChange}
          value={this.state.name}
        />

        <Button type="submit" onClick={this.onSubmitNewUser}>
          Create user
        </Button>
      </Form>
    );
  }
}

export default NewUserForm;
