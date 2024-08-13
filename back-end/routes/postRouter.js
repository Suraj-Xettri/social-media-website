import express from "express";
import postControl from "../controller/postController.js";
import { isLoggedIn } from "../config/isLoggedIn.js";
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("I am from post");
});

postRouter.post("/create", isLoggedIn, postControl.createPost);

postRouter.post("/like/:id", isLoggedIn, postControl.like );

postRouter.post("/dislike/:id", isLoggedIn, postControl.dislike);

export default postRouter;
