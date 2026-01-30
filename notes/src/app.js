const express = require("express");
const app = express();

// middleware
app.use(express.json());
// note feature
const notes = [];

// routing
// creating notes  POST
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "note created successfully!"
    });
});

// Fetching notes Get Method  url /notes
app.get("/notes", (req, res) => [
    res.status(200).json({
        message: notes
    })
]);


// pertiuclar part change
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description;
    res.status(200).json({
        message: "Modified successfully"
    });
});

// complete change 
app.put("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body;
    res.status(200).json({
        message: "Complete updated content"
    });
});

// delete notes 
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index];
    res.status(204).json({
        message: "Deleted successfully!"
    });
});

module.exports = app;