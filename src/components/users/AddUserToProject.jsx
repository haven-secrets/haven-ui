import React from "react";
import { Input, Select, Button, Icon } from "semantic-ui-react";

const AddUserToProject = () => {
  const options = [
    { key: "read", text: "Read", value: "read" },
    { key: "write", text: "Write", value: "write" },
    { key: "both", text: "Both", value: "both" },
  ]

  // TODO: maybe change select to checkbox
  return (
    <div>
      <Input icon="add user" iconPosition="left" placeholder="Add a user..." />
      <Select compact options={options} defaultValue="read" />
      <Button>
        <Icon name="unlock alternate" />
        Grant Access
      </Button>
    </div>
  );
};

export default AddUserToProject;
