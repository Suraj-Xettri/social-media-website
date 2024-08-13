import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const user = await User.findOne({ email: req.user.email });
    const post = await Post.create({
      content,
      author: user._id,
    });
    user.post.push(post._id);
    user.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

const like = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    const post = await Post.findOne({ _id: req.params.id });

    if (post.likes.includes(user._id)) return res.send("You cannot like twice");

    post.likes.push(user._id);
    post.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

const dislike = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    const post = await Post.findOne({ _id: req.params.id });

    post.likes.pop(user._id);
    post.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

const comments = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });

  const comments = await Comment.find({ post: post._id });
  res.send(comments);
};


const postControl = {
  like,
  dislike,
  createPost,
  comments,
};


export default postControl;
