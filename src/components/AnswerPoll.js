import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswerToQuestion, addAnswerToUser } from "../store/actions";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Result from "./Result";
import ErrorPage from "./ErrorPage";

function AnswerPoll() {
  const { quesId } = useParams();
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const question = useSelector((state) => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [option, setOption] = useState("");

  const fetchAuthor = () => {
    const que = question[quesId];
    const author = users[que.author];
    return {
      que,
      author,
    };
  };

  const isAnswered = () => {
    const que = question[quesId];
    const user = users[auth];
    const userVote = user.answers[que.id];

    if (userVote) {
      return true;
    } else {
      return false;
    }
  };

  const fetchResults = () => {
    const que = question[quesId];
    const optionOneVotes = que.optionOne.votes.length;
    const optionTwoVotes = que.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const user = users[auth];
    const userVote = user.answers[que.id];

    return {
      optionOneVotes,
      optionTwoVotes,
      votesTotal,
      userVote,
      que,
    };
  };

  const optionChangeHandler = (value) => {
    setOption(value);
  };

  return (
    <div className=" bg-slate-100 h-screen">
      <NavBar />
      {question[quesId] ? (
        <div className="w-full flex justify-center h-screen">
          <div className="main_container w-full h-32 mt-12">
            <div className="mt-4 w-full border shadow-md bg-white rounded-md mb-10">
              <div className="w-full bg-gray-800 h-40 relative rounded-tl-md rounded-tr-md">
                <p className="text-white font-medium text-lg text-center pt-8 capitalize">
                  {fetchAuthor().author.name}
                </p>
                <img
                  src={fetchAuthor().author.avatarURL}
                  alt=""
                  className="w-28 h-28 user__img border-4 border-white rounded-full bg-white"
                />
              </div>
              <div className="w-full p-7 mt-12 ">
                <p className="text-2xl text-gray-700 font-medium">
                  Would You Rather
                </p>
                {!isAnswered() && (
                  <Question
                    optionHandler={optionChangeHandler}
                    data={fetchAuthor()}
                  />
                )}
                {isAnswered() && <Result data={fetchResults()} />}

                {!isAnswered() ? (
                  <button
                    disabled={option ? false : true}
                    className={`py-2 px-5 ${
                      option
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-500 border-blue-700"
                    } text-lg rounded w-full cursor-pointer border`}
                    onClick={() => {
                      dispatch(
                        addAnswerToQuestion(auth, fetchAuthor().que.id, option)
                      );
                      dispatch(
                        addAnswerToUser(auth, fetchAuthor().que.id, option)
                      );
                      isAnswered();
                    }}
                  >
                    Answer
                  </button>
                ) : (
                  <div className="w-full flex justify-between">
                    <p className=" font-medium text-lg capitalize">
                      {fetchAuthor().author.name} asked
                    </p>
                    <button
                      className="py-1 px-4 border-blue-600 border hover:bg-blue-600 hover:text-white text-blue-600 rounded-md"
                      onClick={() => navigate("/")}
                    >
                      Return Home
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage isSubpage={true} />
      )}
    </div>
  );
}

export default AnswerPoll;
