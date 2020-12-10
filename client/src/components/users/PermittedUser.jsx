import React, { useState, useReducer } from "react";
import { List, Icon, Modal, Button, Form } from "semantic-ui-react";

function editModal(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const PermittedUser = ({ user, removePermissions, editPermissions }) => {
  const [readPermissions, setReadPermissions] = useState(user.read);
  const [writePermissions, setWritePermissions] = useState(user.write);
  const [state, dispatch] = useReducer(editModal, {
    open: false,
    size: "mini",
    user: "user.userName",
  });
  const { open, size } = state;

  const handleDelete = () => {
    removePermissions(user.userName, user.read, user.write);
  };
  const handleEdit = () => {
    dispatch({ type: "open", size: "tiny" });
  };

  const handleCancelEdit = () => {
    setReadPermissions(user.read);
    setWritePermissions(user.write);
    dispatch({ type: "close" });
  };

  const handleSubmitEdit = () => {
    dispatch({ type: "close" });
    editPermissions(user.userName, readPermissions, writePermissions);
  };

  return (
    <>
      <List.Item>
        <List.Content onClick={handleDelete} floated="right">
          <Icon name="delete"></Icon>
        </List.Content>
        <List.Content onClick={handleEdit} floated="right">
          <Icon name="edit"></Icon>
        </List.Content>
        <List.Icon name="user" />
        <List.Content>
          <List.Header>{user.userName}</List.Header>
          {readPermissions ? "Read " : ""}
          {writePermissions ? "Write" : ""}
        </List.Content>
      </List.Item>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>Editing {user.userName}'s permissions</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group grouped>
              <label>HTML checkboxes</label>
              <Form.Field
                label="Read"
                control="input"
                type="checkbox"
                checked={readPermissions}
                onClick={() => setReadPermissions(!readPermissions)}
              />
              <Form.Field
                label="Write"
                control="input"
                type="checkbox"
                checked={writePermissions}
                onClick={() => setWritePermissions(!writePermissions)}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button positive onClick={handleSubmitEdit}>
            Edit
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default PermittedUser;
