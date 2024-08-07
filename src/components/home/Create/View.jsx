import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import {
  FaRegComment,
  FaRegThumbsUp,
  FaRegShareSquare,
  FaRegBookmark,
} from "react-icons/fa";

const View = () => {
  return (
    <div className="">

      
      <div className="flex gap-2 w-full p-2 border-b">
        <img src="/default.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="w-[70vw] sm:w-[50vw] flex flex-col">
          <div className="flex justify-between items-center w-full">
            <p className="text-white">
              Suraj Thapa <span className="ml-1 text-zinc-500">@Username</span>
            </p>
            <TfiLayoutMenuSeparated className="text-zinc-400 text-xl" />
          </div>
          <p className="w-full text-zinc-100">
            Discription Goes here and what about you there i am fine here.
          </p>

          <div className="min-w-[200px] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
            <img src="w-full h-full rounded-2xl" alt="" />
          </div>

          <div className="text-zinc-300 p-3 w-[300px] flex justify-between text-xl">
            <div className="flex items-center justify-center gap-1">
            <FaRegComment />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegThumbsUp />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegShareSquare />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegBookmark />
            <p className="text-sm">17</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full p-2 border-b">
        <img src="/default.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="w-[70vw] sm:w-[50vw] flex flex-col">
          <div className="flex justify-between items-center w-full">
            <p className="text-white">
              Suraj Thapa <span className="ml-1 text-zinc-500">@Username</span>
            </p>
            <TfiLayoutMenuSeparated className="text-zinc-400 text-xl" />
          </div>
          <p className="w-full text-zinc-100">
            Discription Goes here and what about you there i am fine here.
          </p>

          <div className="min-w-[200px] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
            <img src="w-full h-full rounded-2xl" alt="" />
          </div>

          

          <div className="text-zinc-300 p-3 w-[300px] flex justify-between text-xl">
            <div className="flex items-center justify-center gap-1">
            <FaRegComment />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegThumbsUp />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegShareSquare />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegBookmark />
            <p className="text-sm">17</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full p-2 border-b">
        <img src="/default.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="w-[70vw] sm:w-[50vw] flex flex-col">
          <div className="flex justify-between items-center w-full">
            <p className="text-white">
              Suraj Thapa <span className="ml-1 text-zinc-500">@Username</span>
            </p>
            <TfiLayoutMenuSeparated className="text-zinc-400 text-xl" />
          </div>
          <p className="w-full text-zinc-100">
            Discription Goes here and what about you there i am fine here.
          </p>

          <div className="min-w-[200px] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
            <img src="w-full h-full rounded-2xl" alt="" />
          </div>

          <div className="text-zinc-300 p-3 w-[300px] flex justify-between text-xl">
            <div className="flex items-center justify-center gap-1">
            <FaRegComment />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegThumbsUp />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegShareSquare />
            <p className="text-sm">17</p>
            </div>
            <div className="flex items-center justify-center gap-1">
            <FaRegBookmark />
            <p className="text-sm">17</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
