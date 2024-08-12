import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";
import { isLoggedIn } from "../config/isLoggedIn.js";
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("I am from post");
});

postRouter.post("/create", isLoggedIn, async (req, res) => {
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
});

postRouter.post("/like/:id", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    
    const post = await Post.findOne({_id: req.params.id})

    post.likes.push(user._id)
    post.save();
    res.send(post)
    
   
  } catch (error) {
    res.send(error);
  }
});

postRouter.post("/dislike/:id", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    
    const post = await Post.findOne({_id: req.params.id})

    post.likes.pop(user._id)
    post.save();
    res.send(post)
    
  } catch (error) {
    res.send(error);
  }
});

export default postRouter;
