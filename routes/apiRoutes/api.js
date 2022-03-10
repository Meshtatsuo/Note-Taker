const path = require("path");
const router = require("express").Router();

const db = require("../../db/db.json");
console.log(db);

router.get("/api", (req, res) => {
  res.status(200);
});

router.get("/api/notes", (req, res) => {});

router.post("/api/notes", (req, res) => {
  console.log("New Note time!");
});
module.exports = router;
