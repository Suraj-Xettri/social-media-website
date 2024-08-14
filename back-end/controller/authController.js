import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "Email is already used" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err)
        return res.send({
          success: false,
          message: "Something went wrong while registere",
        });
      const user = await User.create({
        username,
        email,
        password: hash,
      });

      const activeUser = {
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePicture,
        post: user.post,
      };
      let token = generateToken(user);
      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 1 * 24 * 60 * 60 * 1000,
        })
        .json({
          success: true,
          message: `welcome ${user.username}`,
          activeUser,
        });
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong while register",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.send({
        success: false,
        message: "Email or password incorrect",
      });

    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (!result)
        return res.send({
          success: false,
          message: "Email or password incorrect",
        });

      let token = generateToken(existingUser);

      const user = {
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        profilePic: existingUser.profilePicture,
        post: existingUser.post,
      };
      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 1 * 24 * 60 * 60 * 1000,
        })
        .json({
          success: true,
          message: `welcome ${existingUser.username}`,
          user,
        });
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const logout = async (req, res) => {
  res
    .cookie("token", "", { maxAge: 0 })
    .json({ success: true, message: "Log Out Succesfully" });
};

const auth = {
  registerUser,
  login,
  logout,
};

export default auth;
