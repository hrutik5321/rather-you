import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

function LeadBoard() {
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const [data, setData] = useState(null);

  const fetchLeadboard = () => {
    const leaderboardData = Object.values(users)
      .map((user) => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length,
      }))
      .sort((a, b) => a.total - b.total)
      .reverse();
    // .slice(0, 3);
    console.log(leaderboardData);
    setData(leaderboardData);
  };

  useEffect(() => {
    fetchLeadboard();
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full h-screen flex justify-center">
        <div className="main_container w-full h-32 mt-12">
          <table className="border p-5">
            <tr className="pl-2">
              <p className="pl-2 py-4">Leadboard</p>
            </tr>
            <tr>
              <th className="text-gray-400 font-normal text-center">Score</th>
              <th className="text-gray-400 font-normal text-left">User</th>
              <th className="text-gray-400 font-normal text-center">
                Answered Questions
              </th>
              <th className="text-gray-400 font-normal text-center">
                Created Questions
              </th>
            </tr>
            {data &&
              data.map((user) => {
                return (
                  <tr className="table__data">
                    <td className="text-center">
                      <span className="py-1 px-2 bg-yellow-400 text-white w-min rounded-sm text-center">
                        {user.total}
                      </span>
                    </td>
                    <td className="flex gap-2">
                      <img src={user.avatarURL} alt="" className="w-6 h-6" />{" "}
                      {user.name}
                    </td>
                    <td className="text-center">{user.answerCount}</td>
                    <td className="text-center">{user.questionCount}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}

export default LeadBoard;
