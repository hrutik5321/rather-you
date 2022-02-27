import React, { useState } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { handleSaveQuestion } from "../store/actions";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

function AddQuestion() {
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(handleSaveQuestion(option1, option2, auth));
    setLoading(false);
    setOption1("");
    setOption2("");
    navigate("/");
  };

  const btnActive = () => {
    if (option1 && option2) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ReactLoading
            type={"bars"}
            color="#adadad"
            height={"10%"}
            width={"10%"}
          />
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center">
          <div className="main_container w-full h-32 mt-12">
            <div className="mt-4 w-full border shadow-md bg-white rounded-md">
              <div className="w-full h-36 bg-gray-800 relative rounded-tl-md rounded-tr-md">
                <p className="text-white font-medium text-lg text-center pt-8 capitalize">
                  {users[auth].name}
                </p>
                <img
                  src={users[auth].avatarURL}
                  alt=""
                  className="w-28 h-28 user__img border-4 border-white rounded-full bg-white"
                />
              </div>
              <div className="w-full p-7 mt-12 ">
                <p className="text-2xl text-gray-700 font-medium">
                  Would You Rather
                </p>
                <div className="mt-3">
                  <form action="" onSubmit={onSubmitHandler}>
                    <input
                      type="text"
                      className="w-full border outline-none px-3 py-2 rounded-md"
                      placeholder="Option One..."
                      onChange={(e) => setOption1(e.target.value)}
                    />
                    <div className="w-full text-center text-lg py-1 mt-3 bg-slate-300">
                      or
                    </div>
                    <input
                      type="text"
                      className="w-full border outline-none px-3 py-2 rounded-md mt-3"
                      placeholder="Option One..."
                      onChange={(e) => setOption2(e.target.value)}
                    />
                    <button
                      className={`w-full py-2 cursor-pointer mt-4 bg-blue-500 text-white ${
                        btnActive() ? "bg-blue-500" : "bg-blue-200"
                      } rounded-md`}
                      onClick={onSubmitHandler}
                      disabled={btnActive() ? false : true}
                    >
                      Ask Question
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddQuestion;
