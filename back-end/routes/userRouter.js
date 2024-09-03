import express from "express";
import auth from "../controller/authController.js";
import upload from "../config/multer-mdb.js";
import { isLoggedIn } from "../config/isLoggedIn.js";
const userRouter = express.Router();

userRouter.post("/register", upload.single("image"), auth.registerUser);
userRouter.post("/login", auth.login);
userRouter.post("/follow/:id",isLoggedIn, auth.follow);
userRouter.post("/unfollow/:id",isLoggedIn, auth.unfollow);
userRouter.get("/logout", auth.logout);
userRouter.get("/profile/:id", auth.profile);

export default userRouter;

