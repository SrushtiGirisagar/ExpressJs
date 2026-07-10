const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";

function firstLogger(req, res, next) {
  console.log(`[firstLogger] ${req.method} request received for ${req.url}`);
  next();
}

function secondLogger(req, res, next) {
  console.log("[secondLogger] Request passed through the second middleware");
  next();
}

app.use(firstLogger);
app.use(secondLogger);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alex" },
    { id: 2, name: "Sam" }
  ]);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
