import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router";

function ErrorPage({ isSubpage }) {
  const navigate = useNavigate();
  return (
    <>
      {!isSubpage && <NavBar />}

      <div className="w-full h-screen flex justify-center items-center -mt-16">
        <div className="bg-white rounded-md shadow-md border md:w-1/2 w-full h-1/2 flex justify-center flex-col items-center">
          <p className="text-2xl">🙁</p>
          <p className="text-3xl font-medium">
            <span className="text-red-600">404</span> page not found
          </p>
          <p
            className="text-blue-700 hover:text-blue-500 cursor-pointer mt-7"
            onClick={() => navigate("/")}
          >
            ⬅️ Go back to Home Page
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
