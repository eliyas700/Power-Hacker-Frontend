import React from "react";
import Login from "./Login";

const RequiredToken = () => {
  return (
    <div className="w-[100%] min-h-[80vh] mx-auto">
      <h1 className="text-red-500 text-3xl text-center font-semibold my-3">
        You Don't Have the Access to This Page
      </h1>
      <p className="text-green-600 text-xl text-center  ">
        Please Login/ SignUp
      </p>
      <button className="btn btn-link underline text-center mx-auto block ">
        <label for="signInModal"> LogIn / Sign Up</label>
      </button>
      <Login />
    </div>
  );
};

export default RequiredToken;
