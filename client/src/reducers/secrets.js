export default function secrets(state = {}, action) {
  const key = action.payload?.projectName + action.payload?.environment;
  switch (action.type) {
    case "GET_ALL_PROJECT_SECRETS":
      state[key] = action.payload.secrets;
      return Object.assign({}, state);
    case "SAVE_NEW_SECRET_VERSION":
      state[key] = state[key].map((secret) => {
        if (secret.SecretName !== action.payload.secrets.SecretName) {
          return secret;
        }
        return action.payload.secrets;
      });
      return Object.assign({}, state);
    case "PUT_SECRET":
      state[key].push(action.payload.secrets)
      return Object.assign({}, state);
    default:
      return state;
  }
}
