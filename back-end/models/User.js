import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:'default.png'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },  
  post: [{
    type: Schema.Types.ObjectId,
    ref: "Post",
  }],


  

});
const User = mongoose.model("User", UserSchema);
export default User;
