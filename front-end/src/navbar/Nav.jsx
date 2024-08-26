import React, { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
const Nav = () => {
  const [isLogged, setIsLoggedin] = useState(false);
 
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [user]);

  return (
    <div>
      <div className="w-screen h-16 bg-zinc-300 flex justify-between items-center sm:px-4 lg:px-10 absolute backdrop-blur bg-opacity-70">
        <div className="text-black text-2xl p-2 lg:text-4xl flex gap-6 justify-center items-center">
          <p>
            <Link to={"/home"}>AnimePlex</Link>
          </p>
        </div>
        <div className="text-primary flex pr-2 gap-3 lg:gap-8 items-center">
          {!isLogged && (
            <button className="bg-secondary-200 px-5 py-1 md:px-14 md:py-3 rounded-xl font-semibold hover:bg-secondary transition duration-300 ease-out">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
          <TfiMenu className="lg:hidden text-3xl text-black md:text-4xl cursor-pointer" />
        </div>
      </div>
      <div className="hidden lg:block">
          <Sidebar />
      </div>
    </div>
  );
};

export default Nav;
