import express from "express";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("I am from post");
});




export default postRouter;
