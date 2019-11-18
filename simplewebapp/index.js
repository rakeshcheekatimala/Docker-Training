const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Hello World Docker Nodejs Server Running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
