require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes"); // 👈 Add this
const resourceRoutes = require("./routes/resourceRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/resources", resourceRoutes);
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes); // 👈 Add this

app.get("/", (req, res) => {
  res.send("🚀 Student Resources Hub Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});