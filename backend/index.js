const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("check log");
});

const task = [];

app.get("/list", (req, res) => {
  res.send(task);
});

app.post("/post", (req, res) => {
  const text = req.body;
  task.push(text);
  console.log(task);

  res.send("todo created");
});

app.listen(port, () => {
  console.log("Server started at port 3100");
});
