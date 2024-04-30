const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000; // You can change the port number if needed

app.post("/add");

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
