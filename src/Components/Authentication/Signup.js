import React, { useState } from "react";
import Login from "./Login";
const Signup = ({ setSignIn, setSignUp }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div className="">
            <div className="w-[100%]">
              <h2 className="uppercase mt-10 text-xl text-center ">Sign Up</h2>
              <div className="w-[60px] h-[2px] bg-success mx-auto mb-10"></div>
              <form className="flex  flex-wrap justify-between items-center mx-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  mb-5 rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail "
                  className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  mb-5 rounded-xl"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className=" w-[100%] p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] mb-5 rounded-xl"
                />

                <button
                  type="submit"
                  className="uppercase text-white  w-[100%] h-[40px] bg-success rounded-xl my-4 block "
                >
                  Sign Up
                </button>
              </form>
            </div>
            <p className="text-sm">
              Already a member with us?{" "}
              <button
                className="text-success inline-block font-semibold mt-5 "
                onClick={() => {
                  setSignUp(false);
                  setSignIn(true);
                }}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
