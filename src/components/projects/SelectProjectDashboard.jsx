import React from "react";
import SelectProjectContainer from "./SelectProjectContainer";
import NewProjectFormContainer from "./NewProjectFormContainer";
import { Segment } from "semantic-ui-react";

const SelectProjectDashboard = () => (
  <div
    style={{
      marginTop: "12em",
    }}
  >
    <SelectProjectContainer />
    <Segment>
      <NewProjectFormContainer />
    </Segment>
  </div>
);

export default SelectProjectDashboard;
