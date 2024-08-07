import express from "express";

const CommentRouter = express.Router();

CommentRouter.get("/", (req, res) => {
  res.send("I am from comment");
});

export default CommentRouter;
