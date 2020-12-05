export default function secrets(state = {}, action) {
  switch (action.type) {
    case "GET_ALL_PROJECT_SECRETS":
      const allKey = action.payload.projectName + action.payload.environment;
      state[allKey] = action.payload.secrets;
      return Object.assign({}, state);
    case "SAVE_NEW_SECRET_VERSION":
      const versionKey =
        action.payload.projectName + action.payload.environment;
      state[versionKey] = state[versionKey].map((secret) => {
        if (secret.SecretName !== action.payload.secrets.SecretName) {
          return secret
        }
        return action.payload.secrets
      });
      return Object.assign({}, state);
    default:
      return state;
  }
}
