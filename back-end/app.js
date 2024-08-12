import express, { urlencoded } from "express";

import Connect from "./config/mango-connection.js";

import Comment from "./models/Comment.js";
import Post from "./models/Post.js";
import User from "./models/User.js";

import userRouter from "./routes/userRouter.js";
import CommentRouter from "./routes/commentRouter.js";
import postRouter from "./routes/postRouter.js";
import dotenv from "dotenv";
import { isLoggedIn } from "./config/isLoggedIn.js";

import cookieParser from "cookie-parser";
dotenv.config();
const app = express()
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(cookieParser())



app.use("/users", userRouter)
app.use("/posts", isLoggedIn, postRouter)
app.use("/comments",isLoggedIn, CommentRouter)



app.listen(3000)