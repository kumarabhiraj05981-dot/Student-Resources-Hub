const express = require("express");
const upload = require("../middleware/upload");
const {
  uploadResource,
  getResources,
} = require("../controllers/resourceController");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadResource);
router.get("/", getResources);

module.exports = router;