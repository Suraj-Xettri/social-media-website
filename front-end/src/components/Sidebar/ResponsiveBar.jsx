import axios from "axios";
import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaPen,
  FaBookmark,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setAuthUser } from "../../redux/authSlice";
import CreatePost from "../CreatePost/CreatePost";
import { GiCrossedSabres } from "react-icons/gi";

const ResponsiveBar = ({ handleMenu }) => {
  const [create, setCreate] = useState(false);
  const handleCreate = () => {
    setCreate((p) => !p);
   
  };

  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This should be inside the configuration object
      });

      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser)); // Assuming setAuthUser is an action
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message); // Always use error.message for better clarity
    }
  };

  const { user } = useSelector((store) => store.auth);
  return (
    <div className="fixed z-20 backdrop-blur-[4px] gap-24 w-screen items-center justify-center h-screen flex">
      <div className="absolute inset-0 bg-zinc-900 bg-opacity-70 backdrop-blur-sm"></div>
      <div className="fixed top-1 z-30 right-0 w-[260px] h-full">
        <div className="bg-[#2B2A3C] pl-5 h-[100vh] rounded-sm text-white flex flex-col gap-10">
          <GiCrossedSabres
            onClick={handleMenu}
            className="absolute cursor-pointer hover:opacity-50 rounded-br-xl transition duration-200 ease-out left-0 p-2 text-5xl"
          />
          <div className="flex flex-col gap-2 items-center pt-[60px]">
            <div className="h-10 w-10 rounded-full flex items-center justify-center">
              <img
                src={`${user?.profilePic || "default.png"}`}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div className="">
              <p className="font-pbold">{user?.username || "Guest Account"}</p>
            </div>
          </div>
          <div className="space-y-10">
            <button onClick={handleMenu}>
              <Link to={"/Home"}>
                <div className="flex cursor-pointer items-center space-x-4">
                  <FaHome className="text-2xl" />
                  <span className="text-xl font-pmedium">Home</span>
                </div>
              </Link>
            </button>

           
            <Link
              to={"/explore"} onClick={handleMenu}
              className="flex cursor-pointer items-center space-x-4"
            >
              <FaSearch className="text-xl" />
              <span className="text-xl">Explore</span>
            </Link>
            
            <div onClick={handleMenu}
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <FaBell className="text-xl" />
              <span className="text-xl">Notifications</span>
            </div>

            <Link onClick={handleMenu}
              to={`/bookmark/${user?._id}`}
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <FaBookmark className="text-xl" />
              <span className="text-xl">Bookmarks</span>
            </Link>
            <Link onClick={handleMenu}
              to={`/profile/${user?._id}`}
              className={`flex  items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
            >
              <FaUser className="text-xl" />
              <span className="text-xl">Profile</span>
            </Link>

            {create && <CreatePost handleCreate={handleCreate} />}

            <button
              onClick={handleCreate}
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!user} // Disable if user is not true
            >
              <FaPen className="text-xl" />
              <span className="text-xl">Create Post</span>
            </button>
          </div>
          <div className="p-4">
            <button
              onClick={logout}
              disabled={!user}
              className={`w-full bg-red-500 text-white py-2 rounded-lg ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBar;
