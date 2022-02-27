const authReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.data.id;
    default:
      return state;
  }
};

export default authReducer;
