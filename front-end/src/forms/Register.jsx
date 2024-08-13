import React from "react";
import { BiBot } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-600">
      <div className="flex relative flex-col px-24 py-8 gap-2 rounded-[50px] bg-zinc-100">
        <div className="absolute w-10 h-10 right-2 top-5 hover:bg-zinc-200 transition  flex items-center justify-center rounded-full">
         <Link to="/home"><IoClose className="text-3xl cursor-pointer" /></Link> 
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-red-600" />
          <h1 className="font-semibold text-3xl text-zinc-700">
            Welcome To AniCluB
          </h1>
          <p className="tracking-tighter">Join and be the member of AniCluB.</p>
        </div>

        <form action="" className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl focus:outline-none focus:border-[3px] focus:border-blue-200"
            />
          </div>
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

          <button
            type="submit"
            className="bg-red-600 py-2 mt-2 text-white font-bold rounded-xl"
          >
            {" "}
            Continue
          </button>
        </form>
        <div className="text-base text-center flex flex-col gap-3">
          <p className="font-semibold text-zinc-700">
            Already a member? <Link to="/login" className="text-blue-500">Log in</Link>
          </p>
        </div>

        <div className="tracking-tight text-center text-zinc-600 text-xs mt-5">
          <p>By continuing, you agree to join <span className="text-black font-semibold">AniCluB</span>.</p>
        </div>

       
      </div>
    </div>
  );
};
