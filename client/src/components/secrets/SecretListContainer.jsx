import SecretList from "./SecretList";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state, { projectName, environment }) => {
  return {
    secrets: state.secrets[projectName + environment] || [],
    role: state.role,
  };
};

const mapDispatchToProps = (dispatch, { projectName, environment }) => {
  return {
    fetchProjectsEnvSecrets: () => {
      axios
        .get(
          `http://localhost:5000/api/listSecretsForProjectEnv?project=${projectName}&environment=${environment}`
        )
        .then((res) => {
          const projectEnvSecrets = res.data;
          dispatch({
            type: "GET_ALL_PROJECT_SECRETS",
            payload: { projectName, environment, secrets: projectEnvSecrets },
          });
        });
    },

    saveNewSecretVersion: ({ SecretName, SecretValue, Flagged, Version }) => {
      const payload = {
        Project: projectName,
        Environment: environment,
        SecretName,
        SecretValue,
      };

      axios.post("http://localhost:5000/api/secrets", payload).then((res) => {
        dispatch({
          type: "SAVE_NEW_SECRET_VERSION",
          payload: {
            ProjectName: projectName,
            Environment: environment,
            SecretName,
            SecretValue,
            Flagged,
            Version,
          },
        });
      });
    },

    putSecret: ({ SecretName, SecretValue, Flagged, Version }) => {
      const payload = {
        Project: projectName,
        Environment: environment,
        SecretName,
        SecretValue,
      };

      axios.post("http://localhost:5000/api/secrets", payload).then((res) => {
        dispatch({
          type: "PUT_SECRET",
          payload: {
            ProjectName: projectName,
            Environment: environment,
            SecretName,
            SecretValue,
            Flagged,
            Version,
          },
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretList);
