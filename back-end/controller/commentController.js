import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const comment = async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content) {
      return res.send({ success:false,  message: 'Content is required' });
    }
    
    const user = await User.findOne({ email: req.user.email });
    const post = await Post.findOne({ _id: req.params.postID });
    if (!user) {
      return res.send({ message: 'You need to login First' , success:false});
    }
    if (!post) {
      return res.send({ message: 'Post not found' , success:false});
    }
    
    const comment = await Comment.create({
      content,
      author: user._id,
      post: post._id
    });

    post.comments.push(comment._id);
    await post.save();

    res.send({ message: 'Commented Successfully' , success:true});
  } catch (error) {
    res.send({ message: error , success:false});
  }
};


export default comment