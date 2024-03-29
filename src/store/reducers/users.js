const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVED_USERS":
      return {
        ...state,
        ...action.data,
      };
    case "ADD_ANSWER_TO_USER":
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          },
        },
      };
    case "ADD_QUESTION_TO_USER":
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
