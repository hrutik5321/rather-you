import React, { useEffect, useState } from "react";
import { getInitialData } from "../utils/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

function Login() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      await getInitialData().then((res) => {
        setUsers(res.users);
        console.log(res);
        setLoading(false);
      });
      setLoading(false);
    };
    setLoading(false);
    fetchUsers();
  }, []);

  return loading ? (
    <div className="w-full h-full flex justify-center items-center">
      <ReactLoading
        type={"bars"}
        color="#adadad"
        height={"10%"}
        width={"10%"}
      />
    </div>
  ) : (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center flex-col gap-5">
      <p className="text-2xl">Would You Rather</p>
      <div className="bg-white border shadow-orange-50 px-6 py-4  text-center ">
        <p>Login to your account</p>
        <p className="w-full text-left mt-4 text-sm font-medium">Select user</p>
        <select
          name=""
          id=""
          className="w-72 p-2 border outline-0 mt-4 cursor-pointer"
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
        >
          <option>Select User</option>
          {Object.values(users).map((user, i) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>

        <br />
        <button
          className="w-72 bg-blue-500 mt-4 py-2 text-white"
          onClick={async (e) => {
            e.preventDefault();
            if (selectedUser) {
              new Promise((res, rej) => {
                setLoading(true);
                setTimeout(() => res(), 500);
              }).then(async () => {
                await dispatch(loginUser(selectedUser));
                if (selectedUser) {
                  setLoading(false);
                  navigate("/");
                }
              });
            }
          }}
        >
          Login
        </button>
        {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{
              width: "45%",
            }}
          >
            {" "}
            45%
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
