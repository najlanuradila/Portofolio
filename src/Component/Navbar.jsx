import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="bg-[#060D0F] border-gray-200 px-8 sm:px-16 py-8 dark:bg-[#060D0F]">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
                <span className="text-neutral-100 font-['Inter'] text-xl font-bold leading-[normal]"></span>
            </Link>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li>
              <Link
                to="/"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skill"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
