import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with this email.");
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      
      if (err) return res.send("error in hash")
      
      const user = await User.create({
        username,
        email,
        password: hash,
      });
      res.send(user);
      let token = generateToken(user);
      res.cookie("token", token);
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
      bcrypt.compare(password, existingUser.password, (err, result) => {
        if (result) {
          let token = generateToken(existingUser);
          res.cookie("token", token);
          res.send("Success fully logged in");
        } else {
          res.send("incorrect Username or password");
        }
      });
    } else {
      res.send("incorrect Username or password");
    }
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
});

export default userRouter;
