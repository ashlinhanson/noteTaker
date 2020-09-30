const express = require("express");
const path = require("path");
const fs = require("fs");

// preps Express to be used
const app = express();
const PORT = process.env.PORT || 8080;

// prepping the express app to handle the data that will be input
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

 //--------HTML Routes---------
// gets the notes.html file
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});
// gets the index.html file
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Activates the server to begin listening
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});