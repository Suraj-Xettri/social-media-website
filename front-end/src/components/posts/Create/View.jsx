import React, { useEffect, useState } from "react";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

const View = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [postID, setPostID] = useState(null); // Updated state
  // Updated state
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((store) => store.auth);
  const [content, setContent] = useState("");
  const [comment, setComment] = useState([]);

  const handleMenu = (postId) => {
    setPostID((prevId) => (prevId === postId ? null : postId));
  };
  const setContents = (e) => {
    setContent(e.target.value);
  };
  const handleComment = (postId) => {
    setSelectedPostId((prevId) => (prevId === postId ? null : postId));
  };
  const getPosts = async () => {
    try {
      const posts = await axios.get("http://localhost:3000/posts");
      setPosts(posts.data);
    } catch (error) {
      toast.error("Failed to fetch posts. Please try again.");
    }
  };
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
  const follow = async (user_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users/follow/${user_id}`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const unfollow = async (user_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users/unfollow/${user_id}`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const Delete = async (post_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/delete/${post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        getPosts();
        toast.success(response.message);
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
        getComments(post_id);
        toast.success(response.data.message);
        setContent("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getComments = async (postId) => {
    handleComment(postId);
    if (selectedPostId !== postId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/comment/post/${postId}`
        );
        setComment(response.data.comment);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    getPosts();
  }, [follow, unfollow]); // Added dependency array to avoid infinite loop

  return (
    <div className="relative p-3">
      {posts.map((post) => (
        <div key={post._id} className="flex gap-2 w-full p-2 relative border-b">
          <Link to={`/profile/${post.author._id}`}>
            <div className="w-10 h-10">
              <img
                src={`${(post.author.profilePicture)}`}
                alt=""
                className="w-full h-full cursor-pointer rounded-full"
              />
            </div>
          </Link>

          <div className="relative w-[80vw] sm:w-[80vw] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <p className="text-[#FFBADE] tracking-tighter font-medium">
                @{post.author.username}
              </p>

              <SlOptions
                onClick={() => (user ? handleMenu(post._id) : "")}
                className={`${
                  user ? "cursor-pointer" : "cursor-not-allowed"
                } text-white`}
                disabled={!user}
              />
            </div>

            {postID === post._id && (
              <div className="absolute backdrop-blur-0 flex flex-col right-0 top-5 bg-white rounded-xl pt-6 z-20">
                <button className="hover:bg-zinc-200 cursor-pointer px-10 py-5">
                  Add to Favorite
                </button>

                {user?.post?.includes(post._id) ? (
                  <button
                    onClick={() => Delete(post._id)}
                    className="hover:bg-zinc-200 cursor-pointer px-10 py-5"
                  >
                    Delete
                  </button>
                ) : (
                  <div className="w-full hover:bg-zinc-200 px-10 py-5">
                    {post?.author?.followers?.includes(user?._id) ? (
                      <button
                        onClick={() => unfollow(post?.author?._id)}
                        className="cursor-pointer w-full"
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => follow(post?.author?._id)}
                        className="w-full cursor-pointer"
                      >
                        Follow
                      </button>
                    )}
                  </div>
                )}

                <IoMdClose
                  onClick={() => handleMenu(post._id)}
                  className="absolute text-2xl cursor-pointer top-0 right-0 rounded-xl"
                />
              </div>
            )}

            <p className="w-full text-sm text-zinc-200">
              <span className="font-bold text-zinc-200">{post.title}</span>:{" "}
              {post.content}
            </p>

            {post.image && (
              <div className="w-[90%] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
                <img
                  src={`${post.image}`}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}
            <div className="text-zinc-300 p-3 w-[300px] flex gap-4 text-xl">
              <div className="flex cursor-pointer items-center justify-center gap-1">
                {post.likes.includes(user?._id) ? (
                  <button
                    disabled={!user}
                    onClick={() => disLike(post?._id)}
                    className="text-red-600"
                  >
                    <FaRegThumbsUp />
                  </button>
                ) : (
                  <button disabled={!user} onClick={() => like(post?._id)}>
                    <FaRegThumbsUp
                      className={`${
                        !user ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    />
                  </button>
                )}
                <p className="text-sm">{post.likes.length}</p>
              </div>

              <div
                onClick={() => getComments(post._id)}
                className="flex cursor-pointer items-center justify-center gap-1"
              >
                <FaRegComment />
                <p className="text-sm font-normal text-zinc-200 ">
                  {post.comments.length}
                </p>
              </div>
            </div>

            {/* Render the comment section only for the selected post */}
            {selectedPostId === post._id && (
              <div className="relative">
                <div className="absolute w-[450px] max-h-[420px] scrol overflow-y-scroll bottom-0 z-20 bg-white px-4 right-0">
                  <div className="relative flex h-full flex-col pb-5 ">
                    <div className="sticky p-2 text-2xl cursor-pointer top-0 right-0 bg-zinc-100 rounded-xl">
                      <IoMdClose onClick={() => handleComment(post._id)} />
                    </div>

                    {comment && comment.length > 0 ? (
                      comment.map((com) => (
                        <div
                          key={com._id}
                          className="flex gap-2 items-center mt-4 mb-2"
                        >
                          <img
                            src={`/profile/${com.author.profilePicture}`}
                            alt={com.author.username}
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex flex-col">
                            <p className="text-sm w-[200px] flex items-end p-2 rounded-xl bg-zinc-100">
                              {com.content}
                            </p>
                            <p className=" text-[10px] text-zinc-400">
                              {com.author.username}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="mt-4">No comments yet</p>
                    )}
                  </div>

                  {user && (
                    <form
                      onSubmit={(e) => commentForm(post._id, e)}
                      className="sticky bottom-0 w-full flex z-20 mt-5"
                    >
                      <input
                        onChange={setContents}
                        value={content}
                        type="text"
                        className="flex-1 px-2 py-3 focus:bg-slate-100"
                        placeholder="Write Your comment"
                      />
                      <button className="text-2xl">
                        <IoMdSend />
                      </button>
                    </form>
                  )}
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
