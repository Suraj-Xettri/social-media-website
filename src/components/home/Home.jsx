import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[45vh] bg-[url('/public/animegroup.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-end">
        <div className="font-bold text-lg sm:text-3xl md:text-3xl lg:text-4xl text-zinc-200 w-screen text-center backdrop-blur bg-black bg-opacity-40 p-4 rounded-md">
          <h1>
            Discover the latest anime posts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
