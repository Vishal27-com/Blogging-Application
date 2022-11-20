require("dotenv").config();
const jwt = require("jsonwebtoken");
const Comment=require("../Model/comment.schema")
async function addComment(token,body){
    let data = jwt.verify(token, process.env.SECRET_KEY);
    let comment = await Comment.create(body);
    comment["author"] = data._id;
    comment.save();
    return  { message: "Successful", error: false }
}
async function getComment(blog){
    let allComment = await Comment.find({ blog: blog })
    .populate("blog")
    .populate("author");
    return  { message: allComment, error: false }
}
async function deleteComment(id){
    await Comment.findByIdAndRemove(id)
    return {message:"Deleted",error:false}
}
module.exports={addComment,getComment,deleteComment}