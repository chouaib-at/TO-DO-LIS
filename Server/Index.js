const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;
mongoose.connect("mongodb://localhost:27017/to-do-list");

app.post("/add", (req, res) => {
  const task = req.body.task;
  const newTask = new Task({ task });

  newTask
    .save()
    .then(() => {
      res.status(201).json({ message: "Task added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add task", details: error });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
