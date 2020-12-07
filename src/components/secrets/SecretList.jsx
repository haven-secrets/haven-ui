import React, { useState } from "react";
import { Form, Grid, Button, Icon, Divider, Input } from "semantic-ui-react";
import Secret from "./Secret";
import { role } from "../../utils/role"
const SecretList = (props) => {
  const [addSecretFormOpen, setAddSecretFormOpen] = useState(false);
  const [newSecretName, setNewSecretName] = useState("");
  const [newSecretValue, setNewSecretValue] = useState("");
  const projectSecrets = props.secrets[props.projectName + props.environment];
  const toggleAddSecretForm = () => setAddSecretFormOpen(!addSecretFormOpen);
  const handleChange = (e, { value }) => {
    if (e.target.id === "secretName") setNewSecretName(value);
    else setNewSecretValue(value);
  };

  const adminOnly = () => (
    <>
      <Button onClick={toggleAddSecretForm}>
        <Icon name={addSecretFormOpen ? "cancel" : "add"} />
        {addSecretFormOpen ? "Cancel" : "Add Secret"}
      </Button>
      <Divider />
      {addSecretFormOpen ? displayAddSecretForm() : ""}
    </>
  )

  const handleSubmit = () => {
    toggleAddSecretForm()
    if (newSecretName.trim() && newSecretValue.trim()) {
      if (projectSecrets.includes(newSecretName)) {
        // TODO: update secret
      } else {
        // TODO: push to AWS
        const SecretName = newSecretName;
        const SecretValue = newSecretValue;
        const Version = "1";
        const Flagged = "false";
        props.putSecret({ SecretName, SecretValue, Version, Flagged });
      }
    }
  };

  if (!projectSecrets) {
    props.fetchProjectsEnvSecrets();
    return "";
  }

  const displayAddSecretForm = () => {
    return (
      <Form size="large">
        <Form.Field>
          <label>Secret Name</label>
          <Input
            id="secretName"
            onChange={handleChange}
            value={newSecretName}
            placeholder="database_password"
          />
        </Form.Field>
        <Form.Field>
          <label>Secret Value</label>
          <Input
            id="secretValue"
            type="password"
            onChange={handleChange}
            value={newSecretValue}
            placeholder="password123"
          />
        </Form.Field>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
        <Divider />
      </Form>
    );
  };

  return (
    <div>
      <Grid centered columns="equal">
        {projectSecrets.map((secret) => (
          <Secret
            secretName={secret.SecretName}
            permissions={props.permissions}
            secretValue={secret.SecretValue}
            flagged={secret.Flagged === "true"}
            version={secret.Version}
            key={secret.SecretName}
            saveNewSecretVersion={props.saveNewSecretVersion}
          />
        ))}
      </Grid>
      <Divider />
      {role === "admin" ? adminOnly() : ""}
    </div>
  );
};

export default SecretList;
