import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[45vh] bg-[url('/public/animegroup.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-end">
        <div className="font-bold text-lg sm:text-3xl md:text-3xl lg:text-4xl text-zinc-200 w-screen text-center backdrop-blur bg-black bg-opacity-40 p-4 rounded-md">
          <h1>Discover the latest anime posts</h1>
        </div>
      </div>
      <button className="w-20 bg-red-400 text-white font-semibold px-2 py-1"><Link to="/home">Join Now</Link> </button>
    </div>
  );
};

export default Home;
