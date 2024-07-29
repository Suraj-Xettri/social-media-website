import React from "react";
import Top from "./Top";
import CreatePost from "./CreatePost";



const Create = () => {
  return (
    <div className="flex-[2] sm:border-l border-zinc-500">
      <Top />
      <CreatePost/>
      
    </div>
  );
};

export default Create;
