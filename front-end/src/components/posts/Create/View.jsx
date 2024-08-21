import React, { useEffect, useState } from "react";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const View = () => {
  const [selectedPostId, setSelectedPostId] = useState(null); // Updated state
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((store) => store.auth);
  const [content, setContent] = useState("");

  const setComments = (e) => {
    setContent(e.target.value);
  };

  const handleComment = (postId) => {
    setSelectedPostId((prevId) => (prevId === postId ? null : postId));
  };

  const getPosts = async () => {
    const posts = await axios.get("http://localhost:3000/posts");
    setPosts(posts.data);
  };

  useEffect(() => {
    getPosts();
  }, []); // Added dependency array to avoid infinite loop

  const like = async (post_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/like/${post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        getPosts();
      } else {
        toast.error(response.message);
        return;
      }
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
      if (response.data.success) {
        getPosts();
      } else {
        toast.error(response.message);
        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const commentForm = async (post_id, e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/comment/${post_id}`,
        { content, author: user?._id, post: post_id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        getPosts();
        toast.success(response.data.message);
        setContent("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative p-3">
      {posts.map((post) => (
        <div key={post._id} className="flex gap-2 w-full p-2 relative border-b">
          <img
            src={post?.author?.profilePicture || "/default.png"}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="w-[80vw] sm:w-[80vw] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <p className="text-blue-700 tracking-tighter font-medium">
                @{post.author.username}
              </p>
            </div>
            <p className="w-full text-sm text-zinc-600"> <span className="font-bold text-zinc-800">{post.title}</span>: {post.content}</p>

            {post.image && (
              <div className="w-[90%] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
                <img
                  src={`/posts/${post.image}`}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}
            <div className="text-zinc-500 p-3 w-[300px] flex gap-4 text-xl">
              <div className="flex cursor-pointer items-center justify-center gap-1">
                {post.likes.includes(user?._id) ? (
                  <button
                    onClick={() => disLike(post?._id)}
                    className="text-red-600"
                  >
                    <FaRegThumbsUp />
                  </button>
                ) : (
                  <button onClick={() => like(post?._id)}>
                    <FaRegThumbsUp />
                  </button>
                )}
                <p className="text-sm">{post.likes.length}</p>
              </div>

              <div
                onClick={() => handleComment(post._id)}
                className="flex cursor-pointer items-center justify-center gap-1"
              >
                <FaRegComment />
                <p className="text-sm font-normal text-zinc-600 ">
                  {post.comments.length}
                </p>
              </div>
            </div>

            {/* Render the comment section only for the selected post */}
            {selectedPostId === post._id && (
              <div className="relative">
                <div className="absolute w-[450px] max-h-[420px] scrol overflow-y-scroll -bottom-15 z-20 bg-white px-4 pt-4 right-0">
                  <div className="relative flex h-full flex-col ">
                    <IoMdClose
                      onClick={() => handleComment(post._id)}
                      className="absolute text-xl right-0 cursor-pointer top-0"
                    />
                    {post.comments.length > 0 ? (
                      post.comments.map((comment) => (
                        <div
                          key={comment._id}
                          className="flex gap-2 items-center mb-2"
                        >
                          <img
                            src={post.author.profilePicture || "/default.png"}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex flex-col">
                            <p className="text-sm w-[200px] flex items-end p-2 rounded-xl bg-zinc-100">
                              {comment?.content}
                            </p>
                            <p className=" text-[10px] text-zinc-400">
                              {post.author.username}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No comments yet</p>
                    )}
                  </div>

                  <form
                    onSubmit={(e) => commentForm(post._id, e)}
                    className="sticky bottom-0 w-full flex z-20 mt-5"
                  >
                    <input
                      onChange={setComments}
                      value={content}
                      type="text"
                      className="flex-1 px-2 py-3 focus:bg-slate-100"
                      placeholder="Write Your comment"
                    />
                    <button className="text-2xl">
                      <IoMdSend />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
