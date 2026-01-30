// server created and config

const express = require("express");
const notesModels = require("./models/notes.model");

const app = express();

// middleware
app.use(express.json());

// post create notes

app.post("/notes", async (req, res) => {
    const { title, description } = req.body;
    const notes = await notesModels.create({
        title, description
    });
    res.status(201).json({
        message: "note is created successfully!",
        notes
    });
});

// reading notes get
app.get("/notes", async (req, res) => {
    const notes = await notesModels.find();
    res.status(200).json({
        message: "Notes fetching successfully!",
        notes
    });
});


module.exports = app;