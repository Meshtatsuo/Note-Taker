const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const db = require("../db/db.json");

// validate entry for note. Allows user to use titles for notes instead of needing
// both title and text. So as long as title has content it's fine.
function validateEntry(content) {
  if (content.title) {
    return true;
  } else {
    return false;
  }
}
// generates random hex to be assigned as id.
function generateID() {
  return crypto.randomBytes(16).toString("hex");
}

// Generates unique ID and then
// adds new note item to the db.json
function addNewNote(body) {
  const note = body;
  note.id = generateID();
  if (validateEntry(note)) {
    db.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(db, null, 2)
    );
    return true;
  } else {
    return false;
  }
}

// Find index of note item by searching for unique ID
// then remove it from db.json
function removeNoteById(id, noteArray) {
  const index = db.findIndex((obj) => obj.id === id);
  console.log(index);
  db.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(db, null, 2)
  );
  return true;
}
module.exports = {
  addNewNote,
  removeNoteById,
};
