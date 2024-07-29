import React from 'react';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaPen, FaBookmark, FaUsers, FaCrown, FaUser, FaEllipsisH } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="absolute bg-black text-white flex flex-col">
      <div className="">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <FaHome className="text-2xl" />
            <span className="text-xl">Home</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <FaSearch className="text-2xl" />
              <span className="text-xl">Explore</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaBell className="text-2xl" />
              <span className="text-xl">Notifications</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl" />
              <span className="text-xl">Messages</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPen className="text-2xl" />
              <span className="text-xl">Grok</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaBookmark className="text-2xl" />
              <span className="text-xl">Bookmarks</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-2xl" />
              <span className="text-xl"> Communities</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUser className="text-2xl" />
              <span className="text-xl">Profile</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEllipsisH className="text-2xl" />
              <span className="text-xl">More</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Post</button>
      </div>
      <div className="flex items-center p-4">
        <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center">
          <span>S</span>
        </div>
        <div className="ml-4">
          <div className="font-bold">Suraj Xettri</div>
          <div className="text-gray-400">@xettri82359</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
