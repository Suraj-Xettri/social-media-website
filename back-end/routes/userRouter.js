import express from "express";

import User from "../models/User.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with this email.");
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      const user = await User.create({
        username,
        email,
        password: hash,
      });
      res.send(user);
    });
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      bcrypt.compare(password, existingUser.password, (err,result) => {
        if(result){
          res.send("Successfully Logged in")
        }else {
          res.send("incorrect Username or password");
        }
      })
    } else {
      res.send("incorrect Username or password");
    }
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
});

export default userRouter;
