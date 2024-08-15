import React from "react";
import CreatePost from "./CreatePost";
import View from "./View";
import "./Create.css";
import { useSelector } from "react-redux";

const Create = () => {
  const {user} = useSelector(store => store.auth)

  return (
    <div className="changes rounded-2xl flex-[2] bg-zinc-100 backdrop-blur overflow-y-scroll overflow-x-hidden relative">
      {user?<CreatePost />:""}
      <View />
    </div>
  );
};

export default Create;
