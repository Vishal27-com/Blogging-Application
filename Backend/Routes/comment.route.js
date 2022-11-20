const express = require("express");
const { addComment, getComment, deleteComment } = require("../Controller/comment.controller");
const app = express.Router();
let error_message=(e)=>({ message: e.message, error: true });

app.post("/post", async (req, res) => {
  try {
    let token = req.headers["authorization"];
    let body=req.body;
    let response=await addComment(token,body)
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.get("/:blog", async (req, res) => {
  try {
    let { blog } = req.params;
    let response=await getComment(blog);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.delete("/:id",async (req,res)=>{
    try {
      let {id}=req.params;
      let response=await deleteComment(id);
        res.send(response);
    } catch (e) {
      res.status(500).send(error_message(e));
    }
})
module.exports = app;
