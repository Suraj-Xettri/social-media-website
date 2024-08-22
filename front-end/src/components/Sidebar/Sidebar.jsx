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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setAuthUser } from "../../redux/authSlice";
import CreatePost from "../CreatePost/CreatePost";

const Sidebar = () => {
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
    <div className="relative">
      <div className="fixed top-20 z-10 left-10 w-[20vw] h-full">
        <div className="bg-zinc-100 pl-5 h-[85vh]  rounded-xl text-zinc-900 flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center pt-5">
            <div className="h-10 w-10 rounded-full flex items-center justify-center">
              <img
                src={user?.profilePic || "/default.png"}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div className="font-semibold">
              {user?.username || "Guest Account"}
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex cursor-pointer items-center space-x-4">
              <FaHome className="text-2xl" />
              <span className="text-xl">Home</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-4">
              <FaSearch className="text-xl" />
              <span className="text-xl">Explore</span>
            </div>
            <div
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <FaBell className="text-xl" />
              <span className="text-xl">Notifications</span>
            </div>

            <div
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <FaBookmark className="text-xl" />
              <span className="text-xl">Bookmarks</span>
            </div>
            <button
              className={`flex cursor-pointer items-center space-x-4 ${
                !user ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <FaUser className="text-xl" />
              <span className="text-xl">Profile</span>
            </button>

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
              className={`w-full bg-blue-500 text-white py-2 rounded-lg ${
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

export default Sidebar;
