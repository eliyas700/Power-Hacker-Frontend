import React from "react";
import logo from "../../Assets/Images/logo.png";
const Header = () => {
  const menuItems = (
    <>
      <li className="text-lg  font-semibold text-white">
        <span>Home</span>
      </li>
      <li className="text-lg font-semibold text-white" tabIndex="0">
        <span to="/blog">Dashboard</span>
      </li>

      <li className="text-lg font-semibold text-white">
        <span to="/contact">Contact Us</span>
      </li>
      <li className="text-lg font-semibold text-white">
        <span to="/myPortfolio">Log In</span>
      </li>
    </>
  );
  return (
    <>
      <div className="flex justify-between sticky top-0 z-50 px-3 bg-[#192a56] py-2">
        <div className="navbar-start">
          <span className="btn btn-ghost normal-case text-[18px] font-sans">
            <img width={180} src={logo} alt="Reyco-Automotive" />
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-accent lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            style={{ right: "0" }}
            tabIndex="0"
            className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-[#192a56] opacity-5 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
