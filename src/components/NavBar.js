import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/actions";

function NavBar() {
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full bg-white flex justify-center border-b">
        <div className="nav__bar bg-white flex justify-between w-full px-6 py-3 ">
          <p className="text-lg">Would You Rather</p>
          <div className="flex items-center gap-2">
            <img src={users[auth].avatarURL} alt="" className="w-8 h-8" />
            <p>{users[auth].name}</p>
            <button
              onClick={() => {
                dispatch(loginUser(""));
              }}
              className="text-sm px-4 py-1 border-2 shadow-sm border-blue-200 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex justify-center border-b">
        <div className="nav__bar bg-white flex justify-left w-full px-6  gap-5">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "py-3 px-2 border-blue-500 border-b cursor-pointer text-blue-600"
                : "py-3 px-2  cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={(navData) =>
              navData.isActive
                ? "py-3 px-2 border-blue-500 border-b cursor-pointer text-blue-600"
                : "py-3 px-2  cursor-pointer"
            }
          >
            Leadboard
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "py-3 px-2 border-blue-500 border-b cursor-pointer text-blue-600"
                : "py-3 px-2  cursor-pointer"
            }
            to="/add"
          >
            Add Question
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
