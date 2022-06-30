import React from "react";
import logo from "../../Assets/Images/logo.png";
const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
          <p>
            Power Hacker Ltd.
            <br />
            Providing reliable Electricity since 1998
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
