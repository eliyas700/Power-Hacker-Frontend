import React, { useState } from "react";
import Signup from "./Signup";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  return (
    <div>
      <div>
        <div>
          <input type="checkbox" id="signInModal" class="modal-toggle" />
          <div class="modal">
            <div class=" w-[320px] px-10  py-4 bg-slate-50 rounded-xl relative  ">
              <label
                for="signInModal"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              {!signUp && signIn ? (
                <div className="">
                  <div className="w-[100%]">
                    <h2 className="uppercase mt-10 text-xl text-center ">
                      login
                    </h2>
                    <div className="w-[60px] h-[2px] bg-success mx-auto mb-10"></div>
                    <form className="flex  flex-wrap justify-between items-center mx-auto">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter E-mail Id/Phone number"
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
                        Continue
                      </button>
                    </form>
                    <p>
                      Do not have an account?{" "}
                      <button
                        className="text-success font-semibold mt-5 "
                        onClick={() => {
                          setSignUp(true);
                          setSignIn(false);
                        }}
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                <Signup setSignIn={setSignIn} setSignUp={setSignUp} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
