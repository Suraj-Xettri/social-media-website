import express from "express";
import { isLoggedIn } from "../config/isLoggedIn.js";
const CommentRouter = express.Router();
import comments from "../controller/commentController.js";


CommentRouter.post("/:postID", isLoggedIn, comments.comment);
CommentRouter.get("/post/:id", comments.getComment);

export default CommentRouter;
