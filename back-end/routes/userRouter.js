import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("I am from user");
});

export default userRouter;
