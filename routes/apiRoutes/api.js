const router = require("express").Router();

// note management library
const { addNewNote, removeNoteById } = require("../../lib/notes");

const db = require("../../db/db.json");

router.get("", (req, res) => {});

// Send back db.json for client side
// JS to use
router.get("/notes", (req, res) => {
  // return note db json
  res.json(db);
});

// adds a new note to the db.json and sends
// appropriate message back
router.post("/notes", (req, res) => {
  if (addNewNote(req.body)) {
    res.send("Success");
  } else {
    res.send("Error saving new note.");
  }
});

// removes a note from the db.json
// using its id and returns success if
// delete successful
router.delete("/notes/:id", (req, res) => {
  console.log(req.params);
  if (removeNoteById(req.params.id)) {
    res.send("Success");
  }
});
module.exports = router;
