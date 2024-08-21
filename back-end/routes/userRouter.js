import express from "express";
import auth from "../controller/authController.js";
import { profileUpload } from "../config/multer-config.js";
const userRouter = express.Router();

userRouter.post("/register", profileUpload.single("image"), auth.registerUser);
userRouter.post("/login", auth.login);
userRouter.get("/logout", auth.logout);

export default userRouter;
