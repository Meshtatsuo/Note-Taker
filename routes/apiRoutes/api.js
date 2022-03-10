const path = require("path");
const router = require("express").Router();

const db = require("../../db/db.json");

router.get("/api", (req, res) => {
  console.log(db);
  res.send(db);
});

module.exports = router;
