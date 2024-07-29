import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-screen h-16 flex justify-between items-center sm:px-4 lg:px-10 absolute backdrop-blur bg-black bg-opacity-50">
      <div className="text-white text-2xl p-2 lg:text-4xl flex gap-6 justify-center items-center">
        <p> <Link to={'/'}>AnimePlex</Link> </p>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search here.."
            className="px-4 py-2 hidden sm:flex md:py-[10px] text-sm lg:w-[20vw] border-zinc-400 focus:outline-none focus:border-[3px] focus:border-blue-200"
          />
          <BsSearch className="absolute hidden sm:flex text-red-500  text-2xl right-1 cursor-pointer"/>
        </div>
      </div>

      <div className="text-white flex pr-2 gap-3 lg:gap-8 items-center">
        <button className="bg-red-600 px-4 py-[5px] md:px-4 md:py-2 rounded-xl font-bold hover:bg-red-500 transition duration-300 ease-out">
          <Link to={'/login'}>login</Link>
        </button>
        <TfiMenu className="text-3xl md:text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
