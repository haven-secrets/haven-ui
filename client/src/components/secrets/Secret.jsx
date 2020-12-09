import React, { useState } from "react";
import { Grid, Segment, Icon, Button, Input } from "semantic-ui-react";

const Secret = ({
  secretName,
  secretValue,
  permissions,
  flagged,
  version,
  saveNewSecretVersion,
}) => {
  const [editingSecret, setEditingSecret] = useState(false);
  const [editableSecretValue, setEditableSecretValue] = useState(secretValue);
  const [viewingSecret, setViewingSecret] = useState(false);

  const viewSecret = () => setViewingSecret(!viewingSecret);
  const editSecret = () => setEditingSecret(!editingSecret);
  const handleChange = (e, { value }) => setEditableSecretValue(value);
  const saveNewSecretValue = (e) => {
    setEditingSecret(false);
    if (
      editableSecretValue.trim().length === 0 ||
      editableSecretValue === secretValue
    ) {
      setEditableSecretValue(secretValue);
    } else {
      const secretValue = editableSecretValue.trim();
      const nextVersion = String(+version + 1);
      const flagged = false;
      saveNewSecretVersion({
        SecretName: secretName,
        SecretValue: secretValue,
        Flagged: flagged,
        Version: nextVersion,
      });
    }
  };

  const editMode = () => (
    <Grid.Row>
      <Grid.Column width={3}>
        <Segment color={flagged ? "red" : null}>
          {flagged ? <Icon name="flag" color="red" /> : null}
          <strong>{secretName.toUpperCase()}</strong>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Input
          size="big"
          fluid
          value={editableSecretValue}
          color={flagged ? "red" : null}
          onChange={handleChange}
        ></Input>
      </Grid.Column>
      {permissions.includes("Write") ? editButton() : ""}
    </Grid.Row>
  );

  const nonEditMode = () => (
    <Grid.Row>
      <Grid.Column width={3}>
        <Segment color={flagged ? "red" : null}>
          {flagged ? <Icon name="flag" color="red" /> : null}
          <strong>{secretName.toUpperCase()}</strong>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color={flagged ? "red" : null} onClick={viewSecret}>
          {viewingSecret ? secretValue : "●".repeat(20)}
        </Segment>
      </Grid.Column>
      {permissions.includes("Write") ? editButton() : ""}
    </Grid.Row>
  );

  const editButton = () => {
    if (editingSecret) {
      return (
        <>
          <Button color="green" onClick={saveNewSecretValue}>
            <Icon name="save" />
          </Button>
          <Button color="blue" onClick={editSecret}>
            <Icon name="cancel" />
          </Button>
        </>
      );
    }
    return (
      <Button color={flagged ? "red" : null} onClick={editSecret}>
        <Icon name="edit" />
      </Button>
    );
  };

  return <>{editingSecret ? editMode() : nonEditMode()}</>;
};

export default Secret;
