import React, { useState } from "react";
import { Select, Button, Icon, Dropdown, Divider } from "semantic-ui-react";

const AddUserToProject = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPermissions, setSelecetdPermissions] = useState(["Read"]);
  const options = [
    { key: "Read", text: "Read", value: ["Read"] },
    { key: "Write", text: "Write", value: ["Write"] },
    { key: "Both", text: "Both", value: ["Read", "Write"] },
  ];

  const userOptions = props.users.map((user) => {
    return { key: user.userName, value: user.userName, text: user.userName };
  });

  const handleChange = (e, { value }) => {
    if (Array.isArray(value)) {
      setSelecetdPermissions(value);
    } else {
      setSelectedUser(value);
    }
  };

  const grantUserAccess = () => {
    if (selectedUser) {
      props.addUserPermission(selectedUser, selectedPermissions)
    }
  };

  return (
    <div>
      <Dropdown
        placeholder="Select User"
        fluid
        search
        selection
        onChange={handleChange}
        options={userOptions}
      />
      <Select
        onChange={handleChange}
        compact
        options={options}
        defaultValue={["Read"]}
      />
      <Button onClick={grantUserAccess}>
        <Icon name="unlock alternate" />
        Grant Access
      </Button>
      <Divider />
    </div>
  );
};

export default AddUserToProject;
