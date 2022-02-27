import { saveQuestion } from "../../utils/api";

// AUTH ACTIONS
export const loginUser = (id) => {
  return {
    type: "LOGIN_USER",
    data: { id },
  };
};

// QUESTION ACTIONS
export const receiveQuestions = (questions) => {
  return {
    type: "RECEIVED_QUESTIONS",
    data: questions,
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

function addQuestion(question) {
  return {
    type: "ADD_QUESTION",
    question,
  };
}

// USER ACTIONS
export const receiveUsers = (users) => {
  return {
    type: "RECEIVED_USERS",
    data: users,
  };
};

export function addAnswerToUser(authUser, qid, answer) {
  return {
    type: "ADD_ANSWER_TO_USER",
    authUser,
    qid,
    answer,
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
