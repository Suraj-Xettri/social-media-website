import React from "react";

const CreatePost = ({handleCreate}) => {
  return (
    <div className="fixed left-0 top-0 z-30 bg-zinc-300 w-screen h-screen flex items-center justify-center">
      <div className=" relative bg-white rounded-2xl mx-auto p-8">

        <div onClick={handleCreate} className="absolute h-10 w-10 bg-red-600 right-0 top-0 cursor-pointer"></div>
        <h1 className="text-2xl font-semibold mb-6">Create Post</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Post Inputs */}
          <div className="md:col-span-2">
            {/* Title Input */}
            <div className="mb-4">
              <label className="block text-2xl font-medium text-zinc-900">
                Title <span className="text-red-500">*</span>
              </label>
              <input
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
                <input type="file" />
              </div>
            </div>

            <div className="w-[200px] h-[200px] rounded-xl bg-zinc-500">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
