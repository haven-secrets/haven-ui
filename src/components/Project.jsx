// import React from "react";
import { Divider } from "semantic-ui-react";
import SecretList from "./secrets/SecretList";
import PermittedUserList from "./users/PermittedUserList";

const Project = () => {
  return (
    <div>
      <SecretList />
      <Divider />
      <PermittedUserList />
    </div>
  );
};

export default Project;
