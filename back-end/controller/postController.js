import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const posts = async (req, res) => {
  try {
    let posts;
    if (req.user) {
      // If the user is logged in, exclude posts by the logged-in user
      posts = await Post.find({ author: { $ne: req.user._id } });
    } else {
      // If the user is not logged in, show all posts
      posts = await Post.find()
        .populate("author", "username profilePicture")
        .populate("comments", "content");
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Server error" });
  }
};



const createPost = async (req, res) => {
  try {
    const { content, title} = req.body;
    const user = await User.findOne({ email: req.user.email });

    const post = await Post.create({
      content,
      title,
      image: req.file.filename, 
      author: user._id,
    });

    user.post.push(post._id);
    await user.save();

    res.send({ success: true, message: "Post created successfully", post });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};



const like = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    if (!user) return { message: "You need to log in first", success: false };

    const post = await Post.findOne({ _id: req.params.id });

    if (post.likes.includes(user._id))
      return res.send({ message: "You cannot like twice", success: false });

    post.likes.push(user._id);
    await post.save();
    res.send({ message: "liked sucessfully", success: true });
  } catch (error) {
    res.send({ message: error.message, success: false });
  }
};

const dislike = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) return { message: "You need to log in first", success: false };

    const post = await Post.findOne({ _id: req.params.id });
    if (!post.likes.includes(user._id))
      return res.send({
        message: "You cannot dislike this video",
        success: false,
      });

    post.likes.pop(user._id);
    post.save();

    res.send({ success: true, message: "Disliked Succesfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const comments = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  const comments = await Comment.find({ post: post._id });

  res.send({success:true , message:"Success", comments});
};

const postControl = {
  like,
  dislike,
  createPost,
  comments,
  posts,
};

export default postControl;
