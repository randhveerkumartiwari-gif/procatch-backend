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
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Build a Landing Page",
      budget: "₹5,000",
      skills: ["HTML", "CSS"]
    },
    {
      id: 2,
      title: "Fix Python Script",
      budget: "₹3,000",
      skills: ["Python"]
    }
  ]);
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});

