import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  return (
    <nav className="shadow-xl md:shadow-none transition-all duration-500">
      <div className="flex items-start justify-between md:py-4">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-3xl px-2 md:px-0 py-4 md:py-0">
            Atomic
          </h1>
          <ul
            className={`md:flex hidden gap-3 items-center text-gray-500 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-green-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden gap-3 md:flex items-center text-sm">
          <Button
            text="Login"
            bgColor="bg-green-500"
            textColor="text-white"
            radius="rounded-full"
          />
          <Button
            text="Sign Up"
            bgColor="bg-white"
            textColor="text-black"
            radius="rounded-full"
          />
        </div>

        <div className="flex sm:hidden flex-col items-end bg-gray-800 w-[60%] px-2 md:px-0 py-4 md:py-0">
          <div className="flex">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6 block"
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
                  className="h-6 w-6 block"
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
        </div>
      </div>

      <div
        className={`overflow-hidden bg-gray-800 flex flex-col items-center justify-around transition-all duration-500 ${
          isOpen ? "h-[25rem] py-4 px-6" : "h-0 py-0 px-0"
        }`}
      >
        <ul className="flex flex-col gap-4 items-start font-bold text-start text-white  ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-green-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gap-3 flex flex-col items-center text-sm mt-4">
          <Button
            text="Login"
            bgColor="bg-green-500"
            textColor="text-white"
            radius="rounded-full"
          />
          <Button
            text="Sign Up"
            bgColor="bg-white"
            textColor="text-black"
            radius="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
