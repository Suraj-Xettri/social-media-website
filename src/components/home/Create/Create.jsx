import React from "react";
import Top from "./Top";
import CreatePost from "./CreatePost";
import View from "./View";

const Create = () => {
  return (
    <div className="flex-[2] overflow-y-scroll overflow-x-hidden relative sm:border-l border-zinc-500">
      <Top />
      <CreatePost/>
      <View/>
      <View/>
      <View/>
      <View/>
      <View/>
      
    </div>
  );
};

export default Create;
