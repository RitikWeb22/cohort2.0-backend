// server create karna and configs

const express = require("express");
const cors = require("cors");
const notesModel = require("./models/note.model");
const app = express(); // server created


// middleware
app.use(express.json());
app.use(cors());
// POST /api/notes
// Creating new notes
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;
    const notes = await notesModel.create({
        title, description
    });
    res.status(201).json({
        message: "note created successfully!",
        notes
    });
});

// GET /api/notes
// for fetching all notes and data
app.get("/api/notes", async (req, res) => {
    const notes = await notesModel.find();
    res.status(200).json({
        message: "Notes fetching successfully!",
        notes
    });

});


// PATCH /api/notes/:id
// notes ya data mai kuch specific part change krna jaise abhi hum description kr rahe hai

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    const notes = await notesModel.findByIdAndUpdate(id, { description });
    res.status(200).json({
        message: "Note updated successfully!",
        notes
    });
});

// DELETE /api/notes/:id
// Deleting any notes usig id

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notesModel.findByIdAndDelete(id);
    res.status(204).json({
        message: "deleted successfully!"
    });
});






// app exported
module.exports = app;
