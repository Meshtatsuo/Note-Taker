const path = require("path");
const router = require("express").Router();

// Send back index.html file when visiting root page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Send back notes.html file when visiting /notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
