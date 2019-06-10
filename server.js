const express = require("express");
const path = require("path");
const app = express();
const filePath = path.join(__dirname, "build");

app.use(express.static(filePath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is up");
});
