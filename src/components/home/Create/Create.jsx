import React from "react";
import Top from "./Top";
import CreatePost from "./CreatePost";
import View from "./View";
import './Create.css'

const Create = () => {
  return (
    <div className="changes flex-[2] border-r overflow-y-scroll overflow-x-hidden relative sm:border-l border-zinc-500">
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
