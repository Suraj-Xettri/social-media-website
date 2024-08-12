import express from "express";
import auth from "../controller/authController.js";
const userRouter = express.Router();

userRouter.post("/register",auth.registerUser );
userRouter.post("/login", auth.login );

userRouter.get("/logout", auth.logout)

export default userRouter;
