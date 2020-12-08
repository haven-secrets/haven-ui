import React from "react";
import SecretList from "./SecretList";
import { connect } from "react-redux";
import { secrets } from "../../data/secrets.js";

const addAdditionalSecretData = (array, object) =>
  Object.assign({}, object, { secrets: array });

const mapStateToProps = (state, { projectName, environment }) => {
  return {
    secrets: state.secrets,
  };
};

const mapDispatchToProps = (dispatch, { projectName, environment }) => {
  const projectEnv = { projectName, environment };
  return {
    fetchProjectsEnvSecrets: () => {
      const projectEnvSecrets = addAdditionalSecretData(secrets, projectEnv);
      dispatch({
        type: "GET_ALL_PROJECT_SECRETS",
        payload: projectEnvSecrets,
      });
    },
    saveNewSecretVersion: (secret) => {
      const newProjectEnvSecrets = addAdditionalSecretData(secret, projectEnv);
      dispatch({
        type: "SAVE_NEW_SECRET_VERSION",
        payload: newProjectEnvSecrets,
      });
    },
    putSecret: (secret) => {
      const newProjectEnvSecrets = addAdditionalSecretData(secret, projectEnv);
      dispatch({
        type: "PUT_SECRET",
        payload: newProjectEnvSecrets,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretList);
