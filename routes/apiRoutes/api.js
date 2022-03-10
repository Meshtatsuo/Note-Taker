const path = require("path");
const router = require("express").Router();

// note management library
const { addNewNote, removeNoteById } = require("../../lib/notes");

const db = require("../../db/db.json");

router.get("", (req, res) => {});

router.get("/notes", (req, res) => {
  //return note db json
  res.json(db);
});

router.post("/notes", (req, res) => {
  if (addNewNote(req.body)) {
    res.send("Success");
  } else {
    res.send("Error");
  }
});

router.delete("/notes/:id", (req, res) => {
  console.log(req.params);
  if (removeNoteById(req.params.id)) {
    res.send("Success");
  }
});
module.exports = router;
