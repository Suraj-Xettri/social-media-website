import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-[#201F31] flex z-40 w-screen h-screen items-center justify-center">
      <div className="h-[80vh] rounded-2xl flex w-[90vw] items-center justify-center bg-[#2B2A3C]">
        <div className="flex flex-1 flex-col items-center space-y-5 text-lg sm:text-3xl md:text-3xl lg:text-4xl text-zinc-200 w-screen backdrop-blur bg-opacity-40 p-4 rounded-md">
          <div className="space-y-5">
            <h1 className="font-semibold text-5xl">HiAnime</h1>
            <p className="text-base w-[400px] text-zinc-300">
              Top search:I Parry EverythingOne PieceAlya Sometimes Hides Her
              Feelings in RussianMy Hero Academia Jujutsu Kaisen 2nd
              SeasonWistoria: Wand and SwordTower of God Season 2Failure Frame:
              I Became the Strongest and Annihilated Everything With
            </p>
            <button className="bg-red-400 w-[200px] text-white font-medium rounded-sm text-lg whitespace-nowrap px-5 py-4">
              <Link to="/home">Join Now</Link>{" "}
            </button>
          </div>
        </div>

        <div className="opacity-50 h-full hidden md:block">
          <img src="/Home-Screen.webp" alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
