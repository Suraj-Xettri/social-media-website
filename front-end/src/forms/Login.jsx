import React, { useState } from "react";
import { BiBot } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authSlice";

export const Login = () => {
  const [data, setdata] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser));
        navigate("/home");
        toast.success(response.data.message);
        
      } else {
        toast.error(response.data.message);
        navigate("/login");
      
      }
    } catch (error) {
      toast.success(error);
    }
  };
  return (
    <div className="fixed z-20 backdrop-blur-[14px] gap-24 w-screen items-center justify-center h-screen flex">
      <div className="absolute inset-0 bg-[#201F31] bg-opacity-90 backdrop-blur-sm"></div>
      <div className="flex relative flex-col px-16 py-8 gap-2 rounded-[50px] bg-[#201F31]">
        <div className="absolute w-10 h-10 right-2 top-5 hover:opacity-50 transition  flex items-center justify-center rounded-full">
          <Link to="/home">
            <IoClose className="text-3xl text-[#FFBADE] cursor-pointer" />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-[#FFBADE]" />
          <h1 className="font-semibold text-3xl text-zinc-400">
            Welcome To AniHub
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 text-zinc-400 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              className="py-2 px-3 border-[2px] bg-[#2B2A3C] border-[#201F31] rounded-xl focus:outline-none focus:border-[2px] focus:border-[#FFBADE]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleInput}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="py-2 px-3 border-[2px] bg-[#2B2A3C] border-[#201F31] rounded-xl focus:outline-none focus:border-[3px] focus:border-[#FFBADE]"
            />
          </div>

          <p className="text-sm font-semibold text-center cursor-pointer text-zinc-400">
            Forgot your password?
          </p>

          <button
            type="submit"
            className="bg-[#FFBADE] py-3 text-black font-bold rounded-xl"
          >
            Log in
          </button>

          <p className="font-semibold text-zinc-400 text-center">OR</p>
        </form>

        <div className="text-sm text-center flex flex-col gap-3 ">
          <p className="font-semibold text-zinc-400">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 font-medium text-sm"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
