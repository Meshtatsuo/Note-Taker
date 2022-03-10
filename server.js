const express = require("express");
const fs = require("fs");
const path = require("path");

//routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//json database for notes
const { notes } = require("./db/db.json");

//port
const PORT = process.env.PORT || 3001;

//middleware
const app = express();
// parse incoming string or array data
app.use(
  express.urlencoded({
    extended: true,
  })
);
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

// use routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listen on port
app.listen(PORT, () => {
  console.log("API server now on port 3001!");
});
