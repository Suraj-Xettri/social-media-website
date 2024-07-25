import React from "react";
import { BiBot } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
export const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-600">
      <div className="flex relative flex-col px-24 py-8 gap-2 rounded-[50px] bg-zinc-100">
        <div className="absolute w-10 h-10 right-2 top-5 hover:bg-zinc-200 transition  flex items-center justify-center rounded-full">
          <IoClose className="text-3xl cursor-pointer" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-red-600" />
          <h1 className="font-semibold text-3xl text-zinc-700">
            Welcome To AniCluB
          </h1>
        </div>

        <form action="" className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl focus:outline-none focus:border-[3px] focus:border-blue-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl focus:outline-none focus:border-[3px] focus:border-blue-200"
            />
          </div>

          <p className="text-sm font-semibold cursor-pointer text-zinc-900">
            Forgot your password?
          </p>

          <button
            type="submit"
            className="bg-red-600 py-3 text-white font-bold rounded-xl"
          >
            {" "}
            Log in
          </button>

          <p className="font-semibold text-black text-center">OR</p>
        </form>


        <div className="text-sm text-center flex flex-col gap-3 ">
          <p className="font-semibold text-zinc-700">
            Don't have an account?<a href="" className="text-blue-500 font-semibold text-lg"> Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};
