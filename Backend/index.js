require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const connection = require("./db");
const {user,blog,comment}=require("./Routes/index");
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", user);
app.use("/blog", blog);
connection();
app.use("/comment", comment);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "https://spreadknowledge-blog-app.netlify.app/",
    method: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on("sent_by_client", (data) => {
    io.emit("sent_by_server", data);
  });
  socket.on("disconnect",()=>{
    console.log("disconnected")
  });
});
server.listen(PORT, () => {
  console.log("Server started...");
});