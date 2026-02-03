// server creating and config
const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");
const app = express(); //server is created

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));


// routes

// CREATING NOTES
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;
    await noteModel.create({
        title,
        description
    });
    res.status(201).json({
        message: "note created successfully!"
    });
});


// FETCHING NOTES
app.get("/api/notes", async (req, res) => {
    const note = await noteModel.find();
    res.status(200).json({
        message: "note fetching is successfully!",
        note
    });

});

// UPDATE NOTES USING ID
app.put("/api/notes/:id", async (req, res) => {
    const { title, description } = req.body;
    const id = req.params.id;
    await noteModel.findByIdAndUpdate(id, { title, description });
    res.status(200).json({
        message: "note updated successfully!"
    });
});

// DELETE NOTES
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "note deleted successfully!"
    });
});

// wild route
app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "./public/index.html"));
});

module.exports = app;