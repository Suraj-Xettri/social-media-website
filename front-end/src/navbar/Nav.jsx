import React, { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setAuthUser } from "../redux/authSlice";
const Nav = () => {
  const [isLogged, setIsLoggedin] = useState(false);

  const { user } = useSelector((store) => store.auth);
 const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [user]);

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This should be inside the configuration object
      });
  
      console.log(response);
  
      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser)); // Assuming setAuthUser is an action
        toast.success(response.data.message);
        console.log(response.data.message);
      } else {
        toast.error(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      toast.error(error.message); // Always use error.message for better clarity
    }
  };
  

  return (
    <div className="w-screen h-16 bg-zinc-300 flex justify-between items-center sm:px-4 lg:px-10 absolute backdrop-blur bg-opacity-70">
      <div className="text-black text-2xl p-2 lg:text-4xl flex gap-6 justify-center items-center">
        <p>
          <Link to={"/home"}>AnimePlex</Link>
        </p>
      </div>
      <div className="text-black flex pr-2 gap-3 lg:gap-8 items-center">
        {isLogged ? (
          <div className="flex space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100">
            </div>

            <button
              onClick={logout}
              className="bg-red-600 px-5 text-xs rounded-xl font-semibold hover:bg-red-500 transition duration-300 ease-out"
            >
              <Link to={"/home"}>Logout</Link>
            </button>
          </div>
        ) : (
          <button className="bg-red-600 px-5 py-1 md:px-4 md:py-2 rounded-xl font-semibold hover:bg-red-500 transition duration-300 ease-out">
            <Link to={"/login"}>login</Link>
          </button>
        )}

        <TfiMenu className="text-3xl text-black md:text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
