import express from "express";
import { isLoggedIn } from "../config/isLoggedIn.js";
const CommentRouter = express.Router();

import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

CommentRouter.get("/", (req, res) => {
  res.send("I am from comment");
});

CommentRouter.post("/:postID", isLoggedIn, async (req, res) => {
 
 const {content} = req.body
  const user = await User.findOne({email: req.user.email})

  const post = await Post.findOne({_id: req.params.postID})

  const comment = await Comment.create({
    content,
    author: user._id,
    post: post._id
  })
  res.send(comment)

});

export default CommentRouter;
