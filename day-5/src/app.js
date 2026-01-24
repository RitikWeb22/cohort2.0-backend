// server create and config things
const express = require("express");

const app = express(); //server created

// middleware
app.use(express.json());
const notes = [];
// Create use Post Method  url /notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "New Note is Created Successfully!"
    });
});

// Fetching notes Get Method  url /notes
app.get("/notes", (req, res) => [
    res.status(200).json({
        message: notes
    })
]);

// delete notes delete method
app.delete("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body;
    res.status(204).json({
        message: "Deleted Successfully"
    });
});


// update method paticular thing
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description;
    res.status(200).json({
        message: "Modified the description!"
    });
});

// complete update

app.put("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body;
    res.status(200).json({
        message: "whole note are updated"
    });
});

// export app
module.exports = app;