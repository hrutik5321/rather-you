import React from "react";

function Result({ data }) {
  return (
    <>
      <div className="mt-4 flex justify-between">
        <p>{((data.optionOneVotes / data.votesTotal) * 100).toFixed(0)}%</p>
        <p>
          {data.optionOneVotes} out of {data.votesTotal}
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${
            (data.optionOneVotes / data.votesTotal) * 100 === 0
              ? "bg-transparent"
              : "bg-blue-500"
          } text-xs font-medium text-blue-100 text-center p-2  leading-none rounded-full`}
          style={{
            width: `${(data.optionOneVotes / data.votesTotal) * 100}%`,
          }}
        >
          {(data.optionOneVotes / data.votesTotal) * 100 === 0 ? (
            <p className="text-transparent"> &nbsp</p>
          ) : (
            `${((data.optionOneVotes / data.votesTotal) * 100).toFixed(0)}%`
          )}
        </div>
      </div>
      <p>{data.que.optionOne.text}</p>
      <div className="mt-4 flex justify-between">
        <p>{((data.optionTwoVotes / data.votesTotal) * 100).toFixed(0)}%</p>
        <p>
          {data.optionTwoVotes} out of {data.votesTotal}
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${
            (data.optionTwoVotes / data.votesTotal) * 100 === 0
              ? "bg-transparent"
              : "bg-blue-500"
          } text-xs font-medium text-blue-100 text-center p-2  leading-none rounded-full`}
          style={{
            width: `${(data.optionTwoVotes / data.votesTotal) * 100}%`,
          }}
        >
          {(data.optionTwoVotes / data.votesTotal) * 100 === 0 ? (
            <p className="text-transparent"> &nbsp</p>
          ) : (
            `${((data.optionTwoVotes / data.votesTotal) * 100).toFixed(0)}%`
          )}
        </div>
      </div>
      <p className="mb-4">{data.que.optionTwo.text}</p>
    </>
  );
}

export default Result;
