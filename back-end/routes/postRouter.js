import express from "express";
import postControl from "../controller/postController.js";
import { isLoggedIn } from "../config/isLoggedIn.js";
import upload from "../config/multer-config.js";
const postRouter = express.Router();

postRouter.get("/", postControl.posts)


postRouter.post("/create", upload.single('image'), isLoggedIn, postControl.createPost);

postRouter.post("/like/:id", isLoggedIn, postControl.like );

postRouter.post("/dislike/:id", isLoggedIn, postControl.dislike);

postRouter.get("/comment/:id", isLoggedIn, postControl.comments);


export default postRouter;
