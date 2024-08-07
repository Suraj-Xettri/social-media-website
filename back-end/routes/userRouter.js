import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("I am from comment");
});

export default userRouter;
