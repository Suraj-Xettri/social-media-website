import React, { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import ResponsiveBar from "../components/Sidebar/ResponsiveBar";
const Nav = () => {
  const [isLogged, setIsLoggedin] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((p) => !p);
  };

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
      <div className="w-screen h-16 bg-transparent flex justify-between items-center sm:px-4 lg:px-10 absolute backdrop-blur bg-opacity-70">
        <div className="text-white text-2xl p-2 lg:text-4xl flex gap-6 justify-center items-center">
          <div className="w-[100px] h-[50px] rounded-2xl">
            <Link to={"/home"}>
              {" "}
              <img
                src="./logo.webp"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />{" "}
            </Link>
          </div>
        </div>
        <div className="text-primary flex pr-2 gap-3 lg:gap-8 items-center">
          {!isLogged && (
            <button className="bg-[#FFBADE] px-5 py-1 md:px-14 md:py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 ease-out">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
          <TfiMenu
            onClick={handleMenu}
            className="lg:hidden text-3xl text-[#FFBADE] md:text-4xl cursor-pointer"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {menu && (
        <div className="lg:hidden">
          <ResponsiveBar handleMenu={handleMenu} />
        </div>
      )}
    </div>
  );
};

export default Nav;
