import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-[44px] ">Atomic</h1>
        <ul className="md:flex flex-row gap-3 items-center text-gray-500 hidden ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="hidden gap-3 md:flex flex-nowrap items-center text-sm">
        <Button
          text="Login"
          bgColor="bg-[#188754]"
          textColor="text-[#fff]"
          radius="rounded-full"
        />
        <Button
          text="Sign Up"
          bgColor="bg-[white]"
          textColor="text-[black]"
          radius="rounded-full"
        />
      </div>
      <div className="flex sm:hidden">
        <button
          onClick={handleToggle}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center justify-center">
          <ul className="sm:flex flex-col gap-3 items-center text-gray-500 md:hidden ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
          <div className=" gap-3 flex flex-col flex-nowrap items-center text-sm">
            <Button
              text="Login"
              bgColor="bg-[#188754]"
              textColor="text-[#fff]"
              radius="rounded-full"
            />
            <Button
              text="Sign Up"
              bgColor="bg-[white]"
              textColor="text-[black]"
              radius="rounded-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
