import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const profilePicture = req.file ? req.file.filename : "default.jpg"; // Replace "default.jpg" with your actual default image path

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
      //66c8267a2ba6c987172f7a58
      const user = await User.create({
        username,
        email,
        profilePicture,
        password: hash,
      });

      const activeUser = {
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePicture,
        post: user.post,
        followers: user.followers,
        following: user.following,
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
          user,
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

      const activeUser = {
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        profilePic: existingUser.profilePicture,
        post: existingUser.post,
        followers: existingUser.followers,
        following: existingUser.following,
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
          activeUser,
        });

      console.log(process.env.CITY);
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const logout = async (req, res) => {
  try {
    res
      .cookie("token", "", { maxAge: 0 })
      .send({ success: true, message: "Log Out Succesfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const follow = async (req, res) => {
  try {
    // Fetch the logged-in user (owner)
    const owner = await User.findOne({ email: req.user.email });
    if (!owner)
      return res.send({ message: "You need to log in first", success: false });

    // Fetch the user to be followed
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.send({ message: "User not found", success: false });

    // Check if the owner is already following the user
    if (user.followers.includes(owner._id)) {
      return res.send({
        message: "You have already followed this user",
        success: false,
      });
    }

    // Perform the follow operation
    user.followers.push(owner._id);
    await user.save();

    owner.following.push(user._id);
    await owner.save();

    // Send the success response after following
    res.send({ message: "Followed successfully", success: true, owner, user });
  } catch (error) {
    // Handle any errors
    res.send({ message: error.message, success: false });
  }
};

const unfollow = async (req, res) => {
  try {
    const owner = await User.findOne({ email: req.user.email });
    if (!owner)
      return res.send({ message: "You need to log in first", success: false });

    const user = await User.findOne({ _id: req.params.id });

    if (!owner.following.includes(user._id))
      return res.send({
        success: false,
        message: "You haven't followed to do unfollow ",
      });

    await User.updateOne(
      { _id: user._id },
      { $pull: { followers: owner._id } }
    );
    await User.updateOne(
      { _id: owner._id },
      { $pull: { following: user._id } }
    );
    res.send({
      message: "UnfollowedFollowed sucessfully",
      success: true,
      owner,
      user,
    });
  } catch (error) {
    res.send({ message: error.message, success: false });
  }
};

const auth = {
  registerUser,
  login,
  logout,
  follow,
  unfollow,
};

export default auth;
