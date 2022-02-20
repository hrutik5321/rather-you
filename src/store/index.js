import { combineReducers } from "redux";
import authReducer from "./reducers/authUser";
import questionReducer from "./reducers/questions";
import userReducer from "./reducers/users";

const allReducers = combineReducers({
  auth: authReducer,
  question: questionReducer,
  users: userReducer,
});

export default allReducers;
