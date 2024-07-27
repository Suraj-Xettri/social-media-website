import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
const Nav = () => {
  return (
    <div className="w-screen h-16 flex bg-black justify-between items-center px-10 absolute backdrop:blur-xl">
      <div className="text-white text-4xl flex gap-6 justify-center items-center">
        <p>AnimePlex</p>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search here.."
            className="px-4 py-2 text-sm w-[20vw] border-zinc-400 focus:outline-none focus:border-[3px] focus:border-blue-200"
          />
          <BsSearch className="absolute text-red-500  text-2xl right-1 cursor-pointer"/>
        </div>
      </div>

      <div className="text-white flex gap-8 items-center">
        <button className="bg-red-600 px-4 py-2 rounded-xl font-bold ">
          Log in
        </button>
        <TfiMenu className="text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
