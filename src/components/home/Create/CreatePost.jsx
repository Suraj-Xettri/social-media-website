import React from "react";
import { GiWorld } from "react-icons/gi";

import {
    FaRegSmile,
    FaRegChartBar,
    FaRegClock,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  import { BsCardImage } from "react-icons/bs";
const CreatePost = () => {
  return (
    <div className="flex flex-col border-b border-zinc-400 justify-center p-5 mt-14 w-full">
      <div className="flex gap-2 w-full">
        <img src="/default.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="w-full">
          <input
            type="text"
            placeholder="What is happening?!"
            className="border-none outline-none text-zinc-500 bg-transparent text-xl"
          />
          <a
            href=""
            className="text-blue-500 hidden text-sm sm:text-[15px] font-bold gap-1 items-center"
          >
            <GiWorld />
            Who can view Your Post
          </a>

          <div className="flex text-blue-400 mt-8 w-full justify-between items-center bg-transparent">
            <div className="flex gap-4 text-sm sm:text-xl">
              <BsCardImage className="cursor-pointer" />
              <FaRegChartBar className="cursor-pointer" />
              <FaRegSmile className="cursor-pointer" />
              <FaRegClock className="cursor-pointer" />
              <FaMapMarkerAlt className="cursor-pointer" />
            </div>

            <button className="px-3 py-[6px] md:px-4 md:py-2  bg-blue-500 rounded-2xl text-white font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
