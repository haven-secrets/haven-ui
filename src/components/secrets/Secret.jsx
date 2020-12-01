import React from "react";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";

const isFlagged = (secretName) => {
  // TODO: flagged will just be a property on the secret
  return secretName === "baz" || secretName === "qux";
}

const Secret = ({ secretName }) => {
  return (    
    <Grid.Row>
      <Grid.Column width={3}>
        <Segment color={isFlagged(secretName) ? "red" : null}>
          {isFlagged(secretName) ? <Icon name="flag" color="red" /> : null}
          <strong>{secretName.toUpperCase()}</strong>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color={isFlagged(secretName) ? "red" : null}>{("●").repeat(20)}</Segment>
      </Grid.Column>
      <Button color={isFlagged(secretName) ? "red" : null}>
        <Icon name="save" />
      </Button>
    </Grid.Row>
  );
};

export default Secret;
