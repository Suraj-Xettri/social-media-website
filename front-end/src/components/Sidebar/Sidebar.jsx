import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaPen,
  FaBookmark,
  FaUser,
} from "react-icons/fa";

const Sidebar = ({handleCreate}) => {
  
  return (
    <div className="fixed top-20 z-20 left-10 w-[17vw]">
      <div className="bg-zinc-200 pl-5 h-[85vh]  rounded-xl text-zinc-900 flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-center pt-5">
          <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center">
            <span>S</span>
          </div>
          <div className="font-semibold">Suraj Xettri</div>
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
          <div className="flex cursor-pointer items-center space-x-4">
            <FaBell className="text-xl" />
            <span className="text-xl">Notifications</span>
          </div>
  
          <div className="flex cursor-pointer items-center space-x-4">
            <FaBookmark className="text-xl" />
            <span className="text-xl">Bookmarks</span>
          </div>
          <div className="flex cursor-pointer items-center space-x-4">
            <FaUser className="text-xl" />
            <span className="text-xl">Profile</span>
          </div>
          <button onClick={handleCreate} className="flex cursor-pointer items-center space-x-4">
            <FaPen className="text-xl" />
            <span className="text-xl">Create Post</span>
          </button>
        </div>
        <div className="p-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
