import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: {
    type: String,
    required: true,
  }, title: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image:{
    type: Buffer
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref:"User"
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref:"Comment"
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
