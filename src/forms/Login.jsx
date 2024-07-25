import React from "react";
import { BiBot } from "react-icons/bi";
export const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-orange-500" />
          <h1 className="font-bold text-3xl text-zinc-600">Welcome To Pinterest</h1>
        </div>

        <form action="" className="mt-10">
            <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input type="text" id="email" className="border border-zinc-500 rounded-xl" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border border-zinc-500 rounded-xl" />
            </div>
           
        </form>
      </div>
    </div>
  );
};
