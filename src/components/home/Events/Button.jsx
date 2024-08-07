import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

const Button = () => {
  return (
    <div className="flex flex-col p-4 gap-5 h-[80vh] box-border border rounded-2xl mt-4 ml-2 border-zinc-700">
      <div className="box-border border-b border-zinc-700 rounded-xl">
        <div className=" box-border p-4 flex justify-between items-center rounded-xl bg-[url('/public/oplogo.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="text-white">
            <h3 className="font-bold tracking-tighter">#OnePiece</h3>
            <p className="font-medium tracking-tighter">Follow the action</p>
          </div>

          <SlArrowRightCircle className="text-2xl rounded-full bg-zinc-900 font-black opacity-50 text-white cursor-pointer" />
        </div>
      </div>

      <h1 className="text-white text-2xl tracking-tighter font-semibold">
        Your Friends.
      </h1>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-zinc-400">
          <div className="flex flex-col gap-[-10]">
            <h4 className="text-sm tracking-tighter text-zinc-200 font-semibold">
              One Piece
            </h4>
            <p className="text-xs font-medium">2.3M posts</p>
          </div>

          <TfiLayoutMenuSeparated />
        </div>

        <div className="flex justify-between text-zinc-400">
          <div className="flex flex-col gap-[-10]">
            <h4 className="text-sm tracking-tighter text-zinc-200 font-semibold">
              One Piece
            </h4>
            <p className="text-xs font-medium">2.3M posts</p>
          </div>

          <TfiLayoutMenuSeparated />
        </div>

        <div className="flex justify-between text-zinc-400">
          <div className="flex flex-col gap-[-10]">
            <h4 className="text-sm tracking-tighter text-zinc-200 font-semibold">
              One Piece
            </h4>
            <p className="text-xs font-medium">2.3M posts</p>
          </div>

          <TfiLayoutMenuSeparated />
        </div>

        <div className="flex justify-between text-zinc-400">
          <div className="flex flex-col gap-[-10]">
            <h4 className="text-sm tracking-tighter text-zinc-200 font-semibold">
              One Piece
            </h4>
            <p className="text-xs font-medium">2.3M posts</p>
          </div>

          <TfiLayoutMenuSeparated />
        </div>

        <div className="flex justify-between text-zinc-400">
          <div className="flex flex-col gap-[-10]">
            <h4 className="text-sm tracking-tighter text-zinc-200 font-semibold">
              One Piece
            </h4>
            <p className="text-xs font-medium">2.3M posts</p>
          </div>

          <TfiLayoutMenuSeparated />
        </div>
      </div>
    </div>
  );
};

export default Button;
