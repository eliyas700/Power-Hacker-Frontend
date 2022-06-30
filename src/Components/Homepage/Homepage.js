import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="w-[100%] h-[80vh] relative ">
      <img
        className="h-[100%]"
        src="https://i.ibb.co/6s3hMjp/34820.jpg"
        alt=""
      />
      <Link
        to="/dashboard"
        className=" flex items-center justify-center btn-bill rounded-md"
      >
        Go To Billing
      </Link>
    </div>
  );
};

export default Homepage;
