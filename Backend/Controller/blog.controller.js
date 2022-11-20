require("dotenv").config();
const jwt = require("jsonwebtoken");
const Blog=require("../Model/blog.schema");
async function addBlog(token,body){
    let data = jwt.verify(token, process.env.SECRET_KEY);
    let blog = await Blog.create(body);
    blog["author"] = data._id;
    blog.save();
    return { message: blog, error: false }
}
async function getBlog(){
    let allBlog = await Blog.find({}).populate("author");
    return { message: allBlog, error: false }
}
async function getBlogById(id){
    let allBlog = await Blog.find({ _id: id }).populate("author");
    return { message: allBlog, error: false }
}
async function updateBlog(id,data){
    await Blog.updateOne({_id:id},{$set:data});
    return { message: "Updated", error: false }
}
async function deleteBlog(id){
   let res=await Blog.findByIdAndRemove(id);
   return { message: "Deleted", error: false }
}
module.exports={addBlog,getBlog,getBlogById,updateBlog,deleteBlog};