import React from "react";
import { Button, Form } from "semantic-ui-react";
import fileDownload from "js-file-download";


class NewUserForm extends React.Component {
  state = {
    name: "",
  };

  onSubmitNewUser = async (e) => {
    const users = this.props.users.map((user) => user.userName);
    if (this.state.name.trim() && !users.includes(this.state.name.trim())) {
      const tempFile = await this.props.addNewUser(this.state.name);
      fileDownload(
        JSON.stringify(tempFile.data),
        "havenAccountInfo.json"
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
