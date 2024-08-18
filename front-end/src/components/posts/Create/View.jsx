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
  const [comment, setComment] = useState([]);

  const setComments = (e) => {
    setContent(e.target.value);
  };

  const getPosts = async () => {
    const posts = await axios.get("http://localhost:3000/posts");
    setPosts(posts.data);
  };

  const getComments = async (id) => {
    try {
      if (selectedPostId === id) {
        // If the same post is clicked, toggle it closed
        setSelectedPostId(null);
        setComment([]);
      } else {
        setSelectedPostId(id); // Set the selected post ID
        const response = await axios.get(
          `http://localhost:3000/posts/comment/${id}`
        );
        setComment(response.data);
        console.log(comment)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleComment = (postId) => {
    getComments(postId);
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
      if (!response.data.success) {
        return toast.error(response.data.message);
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
        { content, author: user._id, post: post_id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
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
    <div className="p-3">
      {posts.map((post) => (
        <div key={post._id} className="flex gap-2 w-full p-2 relative border-b">
          <img
            src={post?.author?.profilePicture || "/default.png"}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="w-[70vw] sm:w-[50vw] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <p className="text-zinc-900 font-medium">
                {post.author.username}
              </p>
            </div>
            <p className="w-full text-zinc-600">{post.content}</p>

            {post.author.profilePicture && (
              <div className="min-w-[200px] mt-2 max-w-[500px] min-h-[200px] h-[300px] max-[350px] rounded-3xl bg-gray-500">
                <img
                  src={post.author.profilePicture}
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </div>
            )}

            <div className="text-zinc-500 p-3 w-[300px] flex gap-4 text-xl">
              <div className="flex cursor-pointer items-center justify-center gap-1">
                {post.likes.includes(user?._id) ? (
                  <button
                    onClick={() => disLike(post._id)}
                    className="text-red-600"
                  >
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
              <div className="absolute w-[450px] max-h-[420px] -bottom-15 z-20 bg-white p-4 right-0">
                <div className="relative scrol flex h-full flex-col overflow-y-scroll ">
                  <IoMdClose
                    onClick={() => getComments(post._id)}
                    className="absolute text-xl right-0 cursor-pointer top-0"
                  />
                  {post.comments.length > 0 ? (
                    post.comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="flex gap-2 items-center mb-2"
                      >
                        <img
                          src={
                            comment?.author?.profilePicture || "/default.png"
                          }
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        <p className="text-sm w-[200px] flex items-end p-2 rounded-xl bg-zinc-100">
                          {comment?.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No comments yet</p>
                  )}
                </div>

                <form
                  onSubmit={(e) => commentForm(post._id, e)}
                  className="flex gap-5 box-border justify-between mt-5"
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
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
