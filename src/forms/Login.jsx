import React from "react";
import { BiBot } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-600">
      <div className="flex flex-col px-24 py-8 gap-2 rounded-[50px] bg-zinc-100">
        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-red-600" />
          <h1 className="font-semibold text-3xl text-zinc-700">
            Welcome To Pinterest
          </h1>
        </div>

        <form action="" className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl"
            />
          </div>

          <p className="text-sm font-semibold cursor-pointer text-zinc-900 tracking-tighter">
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

        <button className="bg-blue-600 flex p-3 gap-4 rounded-xl items-center">
          <FaFacebook className="text-2xl text-white" />
          <span className="text-white font-semibold">
            Continue with Facebook
          </span>
        </button>

        <button className="bg-transparent border border-zinc-300 flex p-3 gap-4 rounded-xl items-center">
          <FcGoogle className="text-2xl text-zinc-600" />
          <span className="text-zinc-800 font-semibold">
            Continue with Google
          </span>
        </button>

        <div className="tracking-tight text-center text-zinc-500 text-xs">
          <p>By continuing, you agree to Pinterest's</p>
          <p>
            <span className="text-zinc-900 font-bold">Terms Of Service</span>{" "}
            and acknowledge you've read our
          </p>
          <p className="font-bold text-zinc-900">
            Privacy Policy. Notice at collection.
          </p>
        </div>

        <div className="text-xs text-center flex flex-col gap-3 mt-3">
          <p className="font-semibold text-zinc-700">
            Not on Pinterest yet?<a href="">Sign up</a>
          </p>
          <p>Are you a business?
          <a href="" className="font-semibold text-zinc-700">Get started here!</a></p>
        </div>
      </div>
    </div>
  );
};
