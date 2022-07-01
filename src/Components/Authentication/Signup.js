import React, { useState } from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Signup = ({ setSignIn, setSignUp }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const user = { name, email, password };
    fetch(`http://localhost:5000/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User Created Successfully");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div className="">
            <div className="w-[100%]">
              <h2 className="uppercase mt-10 text-xl text-center ">Sign Up</h2>
              <div className="w-[60px] h-[2px] bg-success mx-auto mb-10"></div>
              <form
                className="flex  flex-wrap justify-between items-center mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control w-[100%]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  rounded-xl"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
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
                    className="w-[100%] block p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px]  rounded-xl"
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
                  className="uppercase text-white  w-[100%] h-[40px] bg-success rounded-xl my-3 block "
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
