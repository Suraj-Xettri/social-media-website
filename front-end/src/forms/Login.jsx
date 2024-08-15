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
        dispatch(setAuthUser(response.data.activeUser))
        navigate("/home");
        toast.success(response.data.message);
        console.log(response);
      } else {
        toast.error(response.data.message);
        navigate("/login");
        console.log(response);
      }
    } catch (error) {
      toast.success(error);
    }
  };
  return (
    <div className="w-screen relative z-30 h-screen flex items-center justify-center bg-zinc-600">
      <div className="flex relative flex-col px-24 py-8 gap-2 rounded-[50px] bg-zinc-100">
        <div className="absolute w-10 h-10 right-2 top-5 hover:bg-zinc-200 transition  flex items-center justify-center rounded-full">
          <Link to="/home">
            <IoClose className="text-3xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <BiBot className="text-4xl text-red-600" />
          <h1 className="font-semibold text-3xl text-zinc-700">
            Welcome To AniCluB
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              className="py-2 px-3 border-[2px] border-zinc-400 rounded-xl focus:outline-none focus:border-[3px] focus:border-blue-200"
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
            Log in
          </button>

          <p className="font-semibold text-black text-center">OR</p>
        </form>

        <div className="text-sm text-center flex flex-col gap-3 ">
          <p className="font-semibold text-zinc-700">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 font-semibold text-lg"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
