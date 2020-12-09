export default function secrets(state = {}, action) {
  switch (action.type) {
    case "GET_ALL_PROJECT_SECRETS":
      const projEnvAllSecrets =
        action.payload.projectName + action.payload.environment;
      return Object.assign({}, state, {
        [projEnvAllSecrets]: action.payload.secrets,
      });

    case "SAVE_NEW_SECRET_VERSION":
      const projEnvNewVersion =
        action.payload.ProjectName + action.payload.Environment;

      const projEnvUpdatedSecretArr = state[projEnvNewVersion].map((secret) => {
        if (secret.SecretName !== action.payload.SecretName) {
          return secret;
        } else {
          return {
            SecretName: action.payload.SecretName,
            SecretValue: action.payload.SecretValue,
            Flagged: action.payload.Flagged,
            Version: action.payload.Version,
          };
        }
      });

      return Object.assign({}, state, {
        [projEnvNewVersion]: projEnvUpdatedSecretArr,
      });

    case "PUT_SECRET":
      const projEnvNewSecret =
        action.payload.ProjectName + action.payload.Environment;

      const projEnvNewSecretArr = state[projEnvNewSecret].concat({
        SecretName: action.payload.SecretName,
        SecretValue: action.payload.SecretValue,
        Flagged: action.payload.Flagged,
        Version: action.payload.Version,
      });

      return Object.assign({}, state, {
        [projEnvNewSecret]: projEnvNewSecretArr,
      });
    default:
      return state;
  }
}
