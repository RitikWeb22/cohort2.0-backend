// server creating and configrations

const express = require("express");
const notesModel = require("./models/note.model");
const cors = require("cors");
const app = express(); // server created

// config
app.use(express.json());
app.use(cors());

// POST for creating new notes /api/notes
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;
    await notesModel.create({
        title, description
    });
    res.status(201).json({
        message: "note created successfully!"
    });

});


// fetching notes we use GET
app.get("/api/notes", async (req, res) => {
    const notes = await notesModel.find();
    res.status(200).json({
        message: "note fetching successfully!", notes
    });
});

// update anything write now we update only description using note id /api/notes/:id using PATCH

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    await notesModel.findByIdAndUpdate(id, { description });
    res.status(200).json({
        message: "successfully updated description"
    });
});


// deleting notes
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notesModel.findByIdAndDelete(id);
    res.status(204).json({
        message: "Deleted successfully!"
    });
});

module.exports = app; 