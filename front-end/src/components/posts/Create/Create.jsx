import React from "react";
import Top from "./Top";
import CreatePost from "./CreatePost";
import View from "./View";
import "./Create.css";
import { useSelector } from "react-redux";

const Create = () => {
  const {user} = useSelector(store => store.auth)

  return (
    <div className="changes flex-[2] border-r overflow-y-scroll overflow-x-hidden relative sm:border-l border-zinc-500">
      <Top />

      {user?<CreatePost />:""}
      
      <View />
    </div>
  );
};

export default Create;
