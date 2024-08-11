import express from "express";

import User from "../models/User.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with this email.");
    }

    const user = await User.create({
      username,
      email,
      password,
    });
    res.send("Successfully created User");
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const {email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      if(existingUser.password === password){
        res.send("You Logged in" + existingUser.username)
      }else{
        res.send("wrong babyy")
      }
    }else{
      res.send("No user of this email")
    }
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
});

export default userRouter;
