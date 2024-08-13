import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const comment = async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }
    
    const user = await User.findOne({ email: req.user.email });
    const post = await Post.findOne({ _id: req.params.postID });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const comment = await Comment.create({
      content,
      author: user._id,
      post: post._id
    });

    post.comments.push(comment._id);
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


export default comment