export default {
  SET_LINK_TOKEN(state, token) {
    for (const key in Object.keys(token)) {
      state.link_token[key] = token[key];
    }
  },
};
