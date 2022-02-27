import React, { useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { receiveQuestions, receiveUsers } from "./store/actions";
import { getInitialData } from "./utils/api";
import AnswerPoll from "./components/AnswerPoll";
import AddQuestion from "./components/AddQuestion";
import LeadBoard from "./components/LeadBoard";
import ErrorPage from "./components/ErrorPage";

function App() {
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  const fetchQuestions = () => {
    getInitialData().then((res) => {
      dispatch(receiveQuestions(res.questions));
      dispatch(receiveUsers(res.users));
    });
  };

  useEffect(() => {
    if (users !== null || questions !== null) {
      fetchQuestions();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {auth ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/question/:quesId" element={<AnswerPoll />} />
            <Route path="/add" element={<AddQuestion />} />
            <Route path="/leaderboard" element={<LeadBoard />} />
            <Route path="/leaderboard" element={<LeadBoard />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* {!auth && } */}
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={auth ? <ErrorPage /> : <Navigate to="/login" />}
        />
        {/* <Route path="/error" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
