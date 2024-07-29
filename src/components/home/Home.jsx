import React from "react";
import Create from "./Create/Create";
import Events from "./Events/Events";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="w-full h-[45vh] bg-[url('/public/animegroup.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-end">
        <div className="font-bold text-lg sm:text-3xl md:text-3xl lg:text-4xl text-zinc-200 w-screen text-center backdrop-blur bg-black bg-opacity-40 p-4 rounded-md">
          <h1>Discover the latest anime posts</h1>
        </div>
      </div>

      <div className="flex relative overflow-hidden w-[80vw]">
        <Events className="flex-1" />
        <Create className="Flex-[2]" />
        <div className="flex-1 relative">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
