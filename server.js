const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = 8080;//dont forget to change this for heroku. process.env.PORT || 9080

app.use(express.urlencoded({ extended : true }));
app.use(express.json());


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/notes", function(req, res){
    return res.join(notes);
});

app.get("/api/notes/:note", function(req, res){
    var chosenNote = req.params.notes;
    console.log(chosenNote);

    for(var i = 0; i < notes.length; i++) {
        if (chosenNote === notes[i].routeName) {
        return res.json(notes[i]);
        }
    }
    return res.join(false);
});