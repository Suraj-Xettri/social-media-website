import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-screen h-16 flex bg-black justify-between items-center px-10 absolute backdrop:blur-xl">
      <div className="text-white text-4xl flex gap-6 justify-center items-center">
        <p> <Link to={'/'}>AnimePlex</Link> </p>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search here.."
            className="px-4 py-[10px] text-sm w-[20vw] border-zinc-400 focus:outline-none focus:border-[3px] focus:border-blue-200"
          />
          <BsSearch className="absolute text-red-500  text-2xl right-1 cursor-pointer"/>
        </div>
      </div>

      <div className="text-white flex gap-8 items-center">
        <button className="bg-red-600 px-4 py-2 rounded-xl font-bold hover:bg-red-500 transition duration-300 ease-out">
          <Link to={'/login'}>login</Link>
        </button>
        <TfiMenu className="text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
