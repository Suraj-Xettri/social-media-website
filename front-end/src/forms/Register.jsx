import React, { useState } from "react";
import { BiBot } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { setAuthUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
export const Register = () => {
  const [data, setdata] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;

    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser));
        navigate("/home");
        toast.success(response.data.message);
      } else {
        toast.error("Please provide valid information");
        navigate("/register");
      }
    } catch (error) {
      toast.success(response.data.message);
    }
  };

  return (
    <div className="fixed z-20 backdrop-blur-[4px] gap-24 w-screen items-center justify-center h-screen flex">
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
            Welcome To AniCluB
          </h1>
          <p className="tracking-tighter text-zinc-400">Join and be the member of AniCluB.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="mt-5 flex flex-col gap-2 text-zinc-400"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleInput}
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="py-2 px-3 border-[2px] bg-[#2B2A3C] border-[#201F31] rounded-xl focus:outline-none focus:border-[2px] focus:border-[#FFBADE]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="py-2 px-3 border-[2px] bg-[#2B2A3C] border-[#201F31] rounded-xl focus:outline-none focus:border-[2px] focus:border-[#FFBADE]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              onChange={handleInput}
              type="file"
              name="image"
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
              className="py-2 px-3 border-[2px] bg-[#2B2A3C] border-[#201F31] rounded-xl focus:outline-none focus:border-[2px] focus:border-[#FFBADE]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FFBADE] py-2 mt-2 text-black font-bold rounded-xl"
          >
            Register
          </button>
        </form>

        <div className="text-base text-center flex flex-col gap-3">
          <p className="font-medium text-zinc-400">
            Already a member?{" "}
            <Link to="/login" className="text-blue-500 font-medium text-sm">
              LogIn
            </Link>
          </p>
        </div>

        <div className="tracking-tight text-center text-zinc-400 text-xs mt-5">
          <p>
            By continuing, you agree to join{" "}
            <span className="text-white font-semibold">AniCluB</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
