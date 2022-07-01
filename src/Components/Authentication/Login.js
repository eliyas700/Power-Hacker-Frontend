import React, { useState } from "react";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useToken from "../Hooks/useTokens";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [user, setUser] = useState(null);
  useToken(user);
  console.log(user, useToken);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    const email = data?.email;
    const password = data?.password;
    console.log(password, email);
    const user = { email, password };

    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "Login success") {
          toast.success("Logged In Successfully");
          setUser(user);
          event.target.reset();
          navigate("/dashboard");
        } else {
          toast.error("Please Check your Email / Password");
        }
      });
  };
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
                    <form
                      className="flex  flex-wrap justify-between items-center mx-auto"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-control w-[100%]">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  mb-3 rounded-xl"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is Required",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid Email",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>

                      <div className="form-control w-[100%]">
                        <input
                          type="password"
                          placeholder="Your Password"
                          className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  mb-3 rounded-xl"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "You Must Provide a Password",
                            },
                            minLength: {
                              value: 6,
                              message: "Must be 6 characters or longer",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                        </label>
                      </div>

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
