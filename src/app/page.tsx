"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const NavBar = () => {
  // State to track active link
  const [activeLink, setActiveLink] = useState("Treatments");
  const [nav, setNav] = useState(true);

  // Function to handle click event on links
  const handleLinkClick = (link: any) => {
    setActiveLink(link);
    setNav(!nav);
  };

  return (
    <div className="w-full">
      <div className=" md:flex justify-between p-5 md:mx-10 items-center">
        {/* name */}
        <div className="flex justify-between items-center">
          {/* Hamburger icons */}
          <div
            className="md:hidden text-2xl z-10"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <GiHamburgerMenu /> : <ImCross />}
          </div>
          <p className="font-bold md:text-2xl text-3xl text-center md:text-left">
            Ritual
          </p>
          {/* Search icons */}
          <div className="md:hidden text-3xl">
            <IoSearchSharp />
          </div>
        </div>
        {/* nav items */}
        <div className="  hidden md:flex   ">
          <div className="flex space-x-3 font-semibold text-sm ">
            <p
              className={`cursor-pointer ${
                activeLink === "Treatments"
                  ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                  : "text-black px-4   py-2"
              }`}
              onClick={() => handleLinkClick("Treatments")}
            >
              Treatments
            </p>
            <p
              className={`cursor-pointer ${
                activeLink === "Consult"
                  ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                  : "text-black px-4   py-2"
              }`}
              onClick={() => handleLinkClick("Consult")}
            >
              Consult with a doctor
            </p>
            <p
              className={`cursor-pointer ${
                activeLink === "Learn"
                  ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                  : "text-black px-4   py-2"
              }`}
              onClick={() => handleLinkClick("Learn")}
            >
              Learn
            </p>
            <p
              className={`cursor-pointer ${
                activeLink === "Contact"
                  ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                  : "text-black px-4   py-2"
              }`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact us
            </p>
            <p
              className={`cursor-pointer ${
                activeLink === "About"
                  ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                  : "text-black px-4   py-2"
              }`}
              onClick={() => handleLinkClick("About")}
            >
              About us
            </p>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {!nav ? (
        <div className="md:hidden fixed top-0 left-0 h-[100%] bg-white text-black w-[80%] flex flex-col pt-36 pl-7 gap-y-8 font-bold text-2xl ">
          <Link
            href={"/"}
            className={`cursor-pointer ${
              activeLink === "Treatments"
                ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                : "text-black px-4   py-2"
            }`}
            onClick={() => handleLinkClick("Treatments")}
          >
            Treatments
          </Link>
          <Link
            href={"/"}
            className={`cursor-pointer ${
              activeLink === "Consult"
                ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                : "text-black px-4   py-2"
            }`}
            onClick={() => handleLinkClick("Consult")}
          >
            Consult with a doctor
          </Link>
          <Link
            href={"/"}
            className={`cursor-pointer ${
              activeLink === "Learn"
                ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                : "text-black px-4   py-2"
            }`}
            onClick={() => handleLinkClick("Learn")}
          >
            Learn
          </Link>
          <Link
            href={"/"}
            className={`cursor-pointer ${
              activeLink === "Contact"
                ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                : "text-black px-4   py-2"
            }`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact us
          </Link>
          <Link
            href={"/"}
            className={`cursor-pointer ${
              activeLink === "About"
                ? "bg-[#33364A] px-4   py-2 rounded-3xl text-white"
                : "text-black px-4   py-2"
            }`}
            onClick={() => handleLinkClick("About")}
          >
            About us
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
