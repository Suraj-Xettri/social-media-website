import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const CreatePost = () => {
  const [content, setContent] = useState("");

  const {user} = useSelector(store => store.auth)

  const handleContent = (e) => {
    setContent(e.target.value)
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:3000/posts/create",
        {content},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (responce.data.success) {
        toast.success(responce.data.message);
        setContent("")
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="flex border-b border-zinc-400 p-5 w-full">
      <div className="flex gap-3 items-end w-full">
        <img src={user?.profilePic || "/default.png"} alt="" className="w-12 h-12 rounded-full" />
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
            className="flex-1 border-none outline-none text-zinc-700 bg-transparent text-lg"
          />
          <button
            disabled={!content}
            type="submit"
            className="px-8 py-2 bg-blue-500 rounded-2xl text-white font-semibold"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
