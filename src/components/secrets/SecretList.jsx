import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import Secret from "./Secret";

const SecretList = () => {
  const secretNames = ["foo", "bar", "baz", "qux"];

  return (
    <div>
      <Grid centered columns="equal">
        {secretNames.map((secretName) => <Secret secretName={secretName} />)}
      </Grid>
      <Button>
        <Icon name="add" />
        Add Secret
      </Button>
    </div>
  );
};

export default SecretList;
