import express from "express";
import { isLoggedIn } from "../config/isLoggedIn.js";
const CommentRouter = express.Router();
import comment from "../controller/commentController.js";

CommentRouter.get("/", (req, res) => {
  res.send("I am from comment");
});

CommentRouter.post("/:postID", isLoggedIn, comment);

export default CommentRouter;
