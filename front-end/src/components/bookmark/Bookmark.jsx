import React from "react";

const Bookmark = () => {
  const app = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="h-screen w-screen flex justify-center items-center pt-[50px]">
      <div className="flex lg:w-[50vw] h-[85vh] md:w-[70vw] sm:w-[80vw] w-[95vw] ">
        <div className="changes p-8 rounded-2xl flex-[2] bg-[#2B2A3C] text-white backdrop-blur overflow-y-scroll overflow-x-hidden relative">
          <h1 className="mb-5 text-xl text-zinc-400 font-medium">Bookmarks Posts</h1>
          <div className="flex flex-wrap  gap-4">
            {app.map(() => (
              <div className="w-[220px] h-[300px] rounded-xl bg-zinc-800">
                <img
                  src={`/posts`}
                  alt={`Post`}
                  className="object-cover w-full h-full rounded-xl opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
