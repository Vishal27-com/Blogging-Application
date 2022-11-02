const mongoose = require("mongoose");
const Blog = require("../BlogPost/blog.model");
const User = require("./user.schema");
const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
  iat: { type: String },
});
const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
