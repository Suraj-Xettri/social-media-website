import React from "react";

const Explore = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center pt-[50px]">
      <div className="flex lg:w-[50vw] h-[85vh] md:w-[70vw] sm:w-[80vw] w-[95vw] ">
        <div className="changes p-8 rounded-2xl flex-[2] bg-[#2B2A3C] text-white backdrop-blur overflow-y-scroll overflow-x-hidden relative">
          <div className="container p-4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Explore More</h1>
            </div>
            <div className="flex w-full justify-between space-x-4 mb-6">
              <button className="w-full bg-zinc-800 rounded-lg">Anime</button>
              <button className="w-full bg-zinc-800  rounded-lg">Manga</button>
              <button className="px-4 py-2 bg-zinc-800  rounded-lg">
                Manhwa
              </button>
              <button className="w-full bg-zinc-800  rounded-lg">News</button>
            </div>

            {/* Grid of Explore Items */}
            <div className="flex- flex-col">
              
              <div className="px-2 shadow-md overflow-hidden">
                <div className="w-[90%] h-[400px] rounded-xl ">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="p-4 flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-300">
                        <img src="" alt="" className="w-full h-full rounded-full" />
                    </div>
                  <div className="flex flex-col justify-end">
                    <p>UserName</p>
                    <p className="text-gray-300">
                      Description or brief details about the item.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-2 shadow-md overflow-hidden">
                <div className="w-[90%] h-[400px] rounded-xl ">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="p-4 flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-300">
                        <img src="" alt="" className="w-full h-full rounded-full" />
                    </div>
                  <div className="flex flex-col justify-end">
                    <p>UserName</p>
                    <p className="text-gray-300">
                      Description or brief details about the item.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
