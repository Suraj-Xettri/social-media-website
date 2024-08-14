import React from "react";
const CreatePost = () => {



  

  return (
    <div className="flex border-b border-zinc-400 p-5 w-full">
      <div className="flex gap-3 items-end w-full">
        <img src="/default.png" alt="" className="w-12 h-12 rounded-full" />
        <form className="w-full flex justify-between flex-1">
          <input
            type="text"
            name="content"
            placeholder="What is happening?!"
            className="flex-1 border-none outline-none text-zinc-300 bg-transparent text-lg"
          />
          <button type="submit" className="px-8 py-2 bg-blue-500 rounded-2xl text-white font-semibold">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
