const express = require("express");

const app = express();
const server = require("http").Server(app);

var io = (module.exports.io = require("socket.io")(server));

const PORT = process.env.PORT || 3231;

const SocketManager = require("./SocketManager");

// app.use(express.static(__dirname + "/../../build"));

app.get("/", (res, req) => {
  res.sendFile(__dirname + "../../build/index.html");
});

io.on("connection", SocketManager);

app.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});
