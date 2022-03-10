const fs = require("fs");
const path = require("path");

function addNewNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writreFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteArray,
      },
      null,
      2
    )
  );
}
