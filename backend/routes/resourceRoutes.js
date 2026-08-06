const express = require("express");
const Resource = require("../models/Resource");

const router = express.Router();

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add resource
router.post("/", async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;