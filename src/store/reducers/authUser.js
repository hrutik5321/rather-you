const user = {
  id: "",
};

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      // state.id = action.data.id;
      // state.loading = false;
      return action.data.id;
    default:
      return state;
  }
};

export default authReducer;
