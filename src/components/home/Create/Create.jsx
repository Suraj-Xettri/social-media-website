import React from "react";
import { GiWorld } from "react-icons/gi";

const Create = () => {
  return (
    <div className="flex-[2]">
      <div className="flex flex-col items-center border-b border-zinc-400 justify-center p-5 w-full">
        <div className="flex p-2 gap-2 w-full justify-center items-center">
          <img src="/default.png" alt="" className="w-10 h-10 rounded-full" />

          <input
            type="text"
            placeholder="What is happening?!"
            className="border-none outline-none text-zinc-500 bg-transparent text-xl"
          />
        </div>
        <a
          href=""
          className="text-blue-500 text-[15px] font-bold flex gap-1 items-center"
        >
          <GiWorld />
          Who can view Your Post
        </a>
      </div>
    </div>
  );
};

export default Create;
