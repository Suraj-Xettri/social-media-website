import React, { useState } from "react";

const Top = () => {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange((p)=> !p)
  }

  return (
    <div className="sticky top-0 bg-black opacity-90 backdrop:blur z-20 flex border-b items-center box-border border-zinc-500 text-white w-full h-14 justify-evenly">
      <div onClick={handleChange} className=" relative flex flex-col box-border justify-evenly items-center h-full hover:bg-zinc-900 transition duration-200 cursor-pointer w-full">
        <button className="">For You</button>
        <div className={`absolute bottom-0 ${change ? 'bg-red-500': 'bg-transparent'} w-[70px] rounded-3xl h-1`}></div>
      </div>
      <div onClick={handleChange} className="relative flex flex-col box-border items-center justify-evenly h-full hover:bg-zinc-900 cursor-pointer w-full">
        <button className="">Following</button>
        <div className={`absolute bottom-0 ${!change ? 'bg-red-500': 'bg-transparent'} w-[70px] rounded-3xl h-1`}></div>

      </div>
    </div>
  );
};

export default Top;
