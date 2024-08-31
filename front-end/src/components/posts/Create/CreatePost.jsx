import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CreatePost = () => {
  const [content, setContent] = useState("");
  const { user } = useSelector((store) => store.auth);

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:3000/posts/create",
        { content, author: user._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (responce.data.success) {
        toast.success(responce.data.message);
        setContent("");
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex border-b border-zinc-400 p-2 md:p-5 w-full">
      <div className="flex gap-1 sm:gap-3 items-center md:items-end w-full">
        <Link to={`/profile/${user._id}`}>
          <div className="w-5 h-5 sm:w-12 sm:h-12">
            <img
              src={`/profile/${user.profilePic}`}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-between flex-1"
        >
          <input
            onChange={handleContent}
            type="text"
            name="content"
            value={content}
            placeholder={`What is happenoing ${user.username}?`}
            className="flex-1 border-none outline-none text-zinc-700 bg-transparent text-xs sm:text-lg lg:text-xl"
          />
          <button
            disabled={!content}
            type="submit"
            className="lg:px-8 lg:py-2 sm:px-4 px-2 bg-blue-500 rounded-2xl text-white font-semibold"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
