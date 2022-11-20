const express = require("express");
const { addBlog, getBlog, getBlogById, updateBlog, deleteBlog } = require("../Controller/blog.controller");
const app = express.Router();
let error_message=(e)=>({ message: e.message, error: true });
app.post("/post", async  (req, res) => {
  try {
    let token = req.headers["authorization"];
    let data=req.body;
    let response=await addBlog(token,data);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.get("/", async (req, res) => {
  try {
    let response=await getBlog();
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let response=await getBlogById(id);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
app.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let response=await deleteBlog(id);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});

app.patch("/:id", async (req, res) => {
  try {
    let {id}=req.params;
    let data=req.body;
    let response=await updateBlog(id,data)
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(error_message(e));
  }
});
module.exports = app;
