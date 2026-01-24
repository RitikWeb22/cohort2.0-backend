// server creating and configs

const express = require("express");

const app = express(); //server is created

// config
app.use(express.json());
const notes = [];

// create request 
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.send("Note created successfully!");
});
// read request
app.get("/notes", (req, res) => {
    res.send(notes);
});

//update full and particular
app.put("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body;
    res.send("notes Updated successfully!");
});
// particular
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description;
    res.send("particular potion updated!");
});

// delete
app.delete("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body;
    res.send("Deleted successfully!");
});

// export app
module.exports = app;