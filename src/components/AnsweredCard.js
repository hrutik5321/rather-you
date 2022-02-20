import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AnsweredCard({ answers, isPending }) {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  return (
    <>
      {answers.length
        ? answers.map((ans) => {
            return (
              <div className="mt-4 w-full border shadow-md bg-white rounded-md">
                <div className="w-full h-36 bg-gray-800 relative rounded-tl-md rounded-tr-md">
                  <p className="text-white font-medium text-lg text-center pt-8 capitalize">
                    {ans.author}
                  </p>
                  <img
                    src={users[ans.author].avatarURL}
                    alt=""
                    className="w-28 h-28 user__img border-4 border-white rounded-full bg-white"
                  />
                </div>
                <div className="w-full p-7 mt-12 ">
                  <p className="text-2xl text-gray-700 font-medium">
                    Would You Rather
                  </p>
                  <p className="text-center text-lg font-medium text-gray-600">
                    {ans.optionOne.text}
                  </p>
                  <p className="text-center mt-6">
                    <span className="p-3 bg-slate-900 text-white text-center">
                      OR
                    </span>
                  </p>
                  <div className="w-full mt-7 flex items-center justify-between">
                    <p>{users[ans.author].name} asked</p>
                    {isPending ? (
                      <div
                        className="py-2 px-5 bg-blue-700 text-white text-lg rounded cursor-pointer"
                        onClick={() => {
                          navigate(`/question/${ans.id}`);
                        }}
                      >
                        Answer
                      </div>
                    ) : (
                      <div
                        className="py-2 px-5 bg-blue-700 text-white text-lg rounded cursor-pointer"
                        onClick={() => {
                          navigate(`/question/${ans.id}`);
                        }}
                      >
                        Result
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default AnsweredCard;
