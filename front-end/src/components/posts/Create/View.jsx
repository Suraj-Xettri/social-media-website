import React, { useEffect, useState } from "react";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const View = () => {
  const [comment, setComment] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((store) => store.auth);

  const handleComment = () => {
    setComment((p) => !p);
  };

  const getProducts = async () => {
    const posts = await axios.get("http://localhost:3000/posts");
    setPosts(posts.data);
  };

  useEffect(() => {
    getProducts();
  });

  const like = async (post_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/like/${post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  const disLike = async (post_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/dislike/${post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-3">
      {posts.map((post) => (
        <div key={post._id} className="flex gap-2 w-full p-2 relative border-b">
          <img
            src={post.author.profilePicture || "/default.png"}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="w-[70vw]  sm:w-[50vw] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <p className="text-zinc-900 font-medium">
                {post.author.username}
              </p>
            </div>
            <p className="w-full text-zinc-600">{post.content}</p>

            {post.author.profilePicture ? (
              <div className="min-w-[200px] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
                <img src="w-full h-full rounded-2xl" alt="" />
              </div>
            ) : (
              ""
            )}

            <div className="text-zinc-500 p-3 w-[300px] flex gap-4 text-xl">
              <div className="flex cursor-pointer items-center justify-center gap-1">
                {post.likes.includes(user._id) ? (
                  <button onClick={() => disLike(post._id)} className="text-red-600">
                    <FaRegThumbsUp />
                  </button>
                ) : (
                  <button onClick={() => like(post._id)}>
                    <FaRegThumbsUp />
                  </button>
                )}

                <p className="text-sm">{post.likes.length}</p>
              </div>

              <div
                onClick={handleComment}
                className="flex cursor-pointer items-center justify-center gap-1"
              >
                <FaRegComment />
                <p className="text-sm font-normal text-zinc-600 ">
                  {post.comments.length}
                </p>
              </div>
            </div>
          </div>

          {comment && (
            <div className="absolute w-[250px] h-[320px] bottom-5 bg-white left-44">
              <div className="relative flex h-full flex-col scrol overflow-y-scroll p-2 py-10">
                <IoMdClose
                  onClick={handleComment}
                  className="absolute text-xl right-0 cursor-pointer top-0"
                />

                {post.comments
                  ? post.comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="flex gap-2 items-center"
                      >
                        <img
                          src={post.author.profilePicture || "/default.png"}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        <p className="text-sm w-[200px] flex items-end p-2 rounded-xl bg-zinc-100">
                          {comment.content}
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default View;
