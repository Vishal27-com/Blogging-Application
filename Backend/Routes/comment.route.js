const express = require("express");
const { addComment, getComment } = require("../Controller/comment.controller");
const app = express.Router();
let error_message=(e)=>({ message: e.message, error: true });

app.post("/post", async (req, res) => {
  try {
    let token = req.headers["authorization"];
    let response=addComment(token)
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.get("/:blog", async (req, res) => {
  try {
    let { blog } = req.params;
    let response=getComment(blog);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
// app.delete("/:blog",async (req,res)=>{
//     try {
//         await Blog.findByIdAndRemove(req.params)
//         res.send({message:"Deleted",error:false});
//     } catch (error) {
//         res.send({message:error.message,error:true});
//     }
// })
module.exports = app;
