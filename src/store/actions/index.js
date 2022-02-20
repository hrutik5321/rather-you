import { saveQuestion } from "../../utils/api";

export const loginUser = (id) => {
  return {
    type: "LOGIN_USER",
    data: { id },
  };
};

export const receiveQuestions = (questions) => {
  return {
    type: "RECEIVED_QUESTIONS",
    data: questions,
  };
};
export const receiveUsers = (users) => {
  return {
    type: "RECEIVED_USERS",
    data: users,
  };
};

export function addAnswerToQuestion(authUser, qid, answer) {
  return {
    type: "ADD_ANSWER_TO_QUESTION",
    authUser,
    qid,
    answer,
  };
}

export function addAnswerToUser(authUser, qid, answer) {
  return {
    type: "ADD_ANSWER_TO_USER",
    authUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: "ADD_QUESTION",
    question,
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: "ADD_QUESTION_TO_USER",
    id,
    author,
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}
