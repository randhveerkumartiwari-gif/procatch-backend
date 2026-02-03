const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Procatch backend is running 🚀");
});

app.get("/api/courses", (req, res) => {
  res.json([
    { id: 1, title: "Web Development" },
    { id: 2, title: "Python Basics" }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
