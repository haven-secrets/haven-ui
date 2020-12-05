import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import Secret from "./Secret";

const SecretList = (props) => {
  const projectSecrets = props.secrets[props.projectName + props.environment];

  if (!projectSecrets) {
    props.fetchProjectsEnvSecrets();
    return "";
  }

  console.log(projectSecrets);

  return (
    <div>
      <Grid centered columns="equal">
        {projectSecrets.map((secret) => (
          <Secret
            secretName={secret.SecretName}
            permissions={props.permissions}
            secretValue={secret.SecretValue}
            flagged={secret.Flagged === "true"}
            version={secret.Version}
            key={secret.SecretName}
            saveNewSecretVersion={props.saveNewSecretVersion}
          />
        ))}
      </Grid>
      <Button>
        <Icon name="add" />
        Add Secret
      </Button>
    </div>
  );
};

export default SecretList;
