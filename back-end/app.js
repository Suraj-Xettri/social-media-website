import express, { urlencoded } from "express";

import Comment from "./models/Comment.js";
import Post from "./models/Post.js";
import User from "./models/User.js";


const app = express()
app.use(express.json())
app.use(urlencoded({extended: true}))

app.get("/",(req, res) => {
    res.send("hello mittra")
} )

app.listen(3000)