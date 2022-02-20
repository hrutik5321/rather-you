import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import AnsweredCard from "./AnsweredCard";

function Home() {
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.question);
  const [activeBtn, setActiveBtn] = useState("unans");
  const [answers, setAnswers] = useState([]);
  const [unAnswers, setUnAnswers] = useState([]);

  const answerDatas = () => {
    if (auth) {
      const answeredIds = Object.keys(users[auth].answers);

      const answered = Object.values(questions)
        .filter((question) => !answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

      const unanswered = Object.values(questions)
        .filter((question) => answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

      setAnswers(unanswered);
      setUnAnswers(answered);
    }
  };

  useEffect(() => {
    answerDatas();
  });

  return (
    <div className=" bg-slate-100 h-screen">
      <NavBar />
      <div className="w-full flex justify-center h-screen">
        <div className="main_container w-full h-32 mt-12">
          <div className="flex gap-6">
            <button
              className="flex-1 py-2 bg-amber-400 text-white text-lg rounded-sm"
              onClick={() => {
                setActiveBtn("ans");
              }}
            >
              Answered Qestion
            </button>
            <button
              className="flex-1 py-2 bg-green-600 text-white text-lg rounded-sm"
              onClick={() => {
                setActiveBtn("unans");
              }}
            >
              Unanswer Uestion
            </button>
          </div>
          {activeBtn === "ans" && (
            <AnsweredCard answers={answers} isPending={false} />
          )}

          {activeBtn === "unans" && (
            <AnsweredCard answers={unAnswers} isPending={true} />
          )}

          {/* </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
