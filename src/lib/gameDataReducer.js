const actions = {
  reset: () => ({}),
  insert: (_, action) => action.payload,
};

const saveStateReducer = (state, action) => {
  const handler = actions[typeof action === "string" ? action : action.type];
  if (!handler) {
    throw new Error("No such action in editGameData reducer");
  }
  return handler(state, action);
};

export default saveStateReducer;
