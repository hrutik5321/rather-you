const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVED_QUESTIONS":
      return {
        ...state,
        ...action.data,
      };
    case "ADD_ANSWER_TO_QUESTION":
      const { authUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };
    case "ADD_QUESTION":
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
};

export default questionReducer;
