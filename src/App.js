import React, { useEffect, useState, Fragment } from "react";
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

function App() {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const fetchQuestions = () => {
    getInitialData().then((res) => {
      dispatch(receiveQuestions(res.questions));
      dispatch(receiveUsers(res.users));
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // useEffect(() => {
  //   console.log(auth.id);
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        {auth && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/question/:quesId" element={<AnswerPoll />} />
            <Route path="/add" element={<AddQuestion />} />
            <Route path="/lead" element={<LeadBoard />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
