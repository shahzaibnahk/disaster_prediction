import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
const Header = () => {
  const location = useLocation();

  if (location.pathname === "/dashboard") return null;

  return (
    <header className="w-full border-b border-zinc-900 bg-zinc-950 p-4 fixed top-0 left-0">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bricolage">
          <Link to={"/"}>
            <span className="text-red-500 font-medium">Disaster</span>{" "}
            Prediction
          </Link>
        </h1>
        <div className="">
          <Link
            className="bg-red-500 px-4 py-3 rounded flex items-center gap-2 hover:bg-red-800 transition-colors"
            to="/login"
          >
            <span className="text-white font-semibold font-bricolage">
              Get Started
            </span>
            <span>
              <IoArrowForward className="text-white text-xl" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
