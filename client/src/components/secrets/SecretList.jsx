import React, { useEffect, useState } from "react";
import { Form, Grid, Button, Icon, Divider, Input } from "semantic-ui-react";
import Secret from "./Secret";

const SecretList = ({
  fetchProjectsEnvSecrets,
  secrets,
  saveNewSecretVersion,
  putSecret,
  permissions,
  role,
}) => {
  const [addSecretFormOpen, setAddSecretFormOpen] = useState(false);
  const [newSecretName, setNewSecretName] = useState("");
  const [newSecretValue, setNewSecretValue] = useState("");
  const toggleAddSecretForm = () => setAddSecretFormOpen(!addSecretFormOpen);

  useEffect(() => {
    fetchProjectsEnvSecrets();
  }, [fetchProjectsEnvSecrets]);

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
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleAddSecretForm();
    if (newSecretName.trim() && newSecretValue.trim()) {
      const existingSecret = secrets.find(
        (secret) => secret.SecretName === newSecretName
      );
      if (existingSecret) {
        saveNewSecretVersion({
          SecretName: existingSecret.SecretName,
          SecretValue: newSecretValue,
          Flagged: false,
          Version: String(+existingSecret.Version + 1),
        });
        setNewSecretName("");
        setNewSecretValue("");
      } else {
        const secretName = newSecretName;
        const secretValue = newSecretValue;
        const version = "1";
        const flagged = "false";
        putSecret({
          SecretName: secretName,
          SecretValue: secretValue,
          Flagged: flagged,
          Version: version,
        });
        setNewSecretName("");
        setNewSecretValue("");
      }
    }
  };

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
        {secrets.map((secret) => (
          <Secret
            secretName={secret.SecretName}
            permissions={permissions}
            secretValue={secret.SecretValue}
            flagged={String(secret.Flagged) === "true"}
            version={secret.Version}
            key={secret.SecretName}
            saveNewSecretVersion={saveNewSecretVersion}
          />
        ))}
      </Grid>
      <Divider />
      {permissions.includes("Write") ? adminOnly() : ""}
    </div>
  );
};

export default SecretList;
