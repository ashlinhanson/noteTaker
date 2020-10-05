const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const notesArr = require("./db/db.json");

// preps Express to be used
const app = express();
const PORT = process.env.PORT || 8080;

// prepping the express app to handle the data that will be input
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static("./public"));

 //--------HTML Routes---------
// gets the notes.html file
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});
// gets the index.html file
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post(".api/notes", function(req, res){
    const newNote = {
        id : uuid.v4(),
        title : req.body.title,
        text : req.body.text
    }
    notesArr.push(newNotes);
    return notesArr;
});

app.delete("")

// Activates the server to begin listening
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});