import React, { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CreatePost = ({ handleCreate }) => {
  const [content, setContent] = useState({});
  const { user } = useSelector((store) => store.auth);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", content.title);
      formData.append("content", content.content);
  
      // Ensure that the image is appended with the correct key
      if (content.image) {
        formData.append("image", content.image);
      }
  
      const response = await axios.post(
        "http://localhost:3000/posts/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
  
      if (response.data.success) {
        toast.success(response.data.message);
        setContent({});
        handleCreate();
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  const handleContent = (e) => {
    const name = e.target.name;
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
  
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };
  
  return (
    <div className="fixed backdrop-blur-[6px] left-0 top-0 z-30 w-screen h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-zinc-900 bg-opacity-80 backdrop-blur-sm"></div>
      <div className=" relative bg-white rounded-2xl mx-auto p-8">
        <div
          onClick={handleCreate}
          className="absolute h-10 w-10 bg-red-600 right-0 top-0 cursor-pointer"
        ></div>
        <h1 className="text-2xl font-semibold mb-6">Create Post</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex w-[60vw]  md:grid-cols-3 gap-6"
        >
          {/* Left Column: Post Inputs */}
          <div className="md:col-span-2 w-[30vw]">
            {/* Title Input */}
            <div className="mb-4">
              <label className="block text-2xl font-medium text-zinc-900">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleContent}
                name="title"
                type="text"
                className="mt-1 p-3 w-full rounded-md border border-gray-500 shadow-sm focus:ring-1"
              />
            </div>

            {/* Content Editor */}
            <div className="mb-4">
              <label className="block text-2xl font-medium text-zinc-900">
                Content <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                {/* Placeholder for a rich text editor */}
                <textarea
                  onChange={handleContent}
                  name="content"
                  rows="10"
                  className="p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Write your content here..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Column: Additional Settings */}
          <div className="flex flex-col items-center space-y-6">
            {/* Featured Image */}
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-sm font-medium text-gray-700">
                Featured Image
              </h2>
              <div className="mt-2 px-4 box-border flex flex-col space-y-3 justify-center items-center border-dashed border-2 border-gray-300 rounded-md py-8">
                <input onChange={handleContent} type="file" name="image" />
              </div>
            </div>

            <div className="w-[340px] h-[200px] rounded-xl bg-zinc-500"></div>
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
