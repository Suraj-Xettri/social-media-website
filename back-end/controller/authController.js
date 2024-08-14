import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with this email.");
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) return res.send({registered:false});
      const user = await User.create({
        username,
        email,
        password: hash,
      });
      let token = generateToken(user);
      res.cookie("token", token);
      res.send({registered:true});
    });
  } catch (error) {
    res.send({registered:false});
  }
};




const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existingUser = await User.findOne({ email });

    if (!existingUser) return res.send("incorrect Username or password");

    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (!result) return res.send({message:false});

      let token = generateToken(existingUser);
      res.cookie("token", token);
      res.send({message:true});
    });
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    res.status(500).send("Server error");
  }
};

const logout = async (req, res) => {
  res.cookie("token", "");
  res.send("Logged out succesfully");
};

const auth = {
  registerUser,
  login,
  logout,
};

export default auth;
