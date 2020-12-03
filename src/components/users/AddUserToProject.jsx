import React from "react";
import { Select, Button, Icon, Dropdown } from "semantic-ui-react";

const AddUserToProject = (props) => {
  const options = [
    { key: "read", text: "Read", value: "read" },
    { key: "write", text: "Write", value: "write" },
    { key: "both", text: "Both", value: "both" },
  ];
  const userOptions = props.users.map((user) => {
    return { key: user.userName, value: user.userName, text: user.userName };
  });
  // TODO: maybe change select to checkbox
  return (
    <div>
      <Dropdown
        placeholder="Select User"
        fluid
        search
        selection
        options={userOptions}
      />
      <Select compact options={options} defaultValue="read" />
      <Button>
        <Icon name="unlock alternate" />
        Grant Access
      </Button>
    </div>
  );
};

export default AddUserToProject;
