import React from "react";

function Question({ data, optionHandler }) {
  return (
    <>
      <p className="text-center text-lg font-medium text-gray-600">
        Choose one option
      </p>
      <form className="mt-4 mb-5">
        <div>
          <input
            type="radio"
            value="optionOne"
            name="answer"
            id="firstOption"
            onChange={(e) => optionHandler(e.target.value)}
            className="cursor-pointer"
          />
          <label className="ml-3 cursor-pointer" htmlFor="firstOption">
            {data.que.optionOne.text}
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="optionTwo"
            name="answer"
            id="secondOption"
            onChange={(e) => optionHandler(e.target.value)}
            className="cursor-pointer"
          />

          <label className="ml-3 cursor-pointer" htmlFor="secondOption">
            {data.que.optionTwo.text}
          </label>
        </div>
      </form>
    </>
  );
}

export default Question;
