const mongoose = require("mongoose");

// schema design
const noteSchema = new mongoose.Schema({
    title: String,
    description: String
});

// models
const notesModels = mongoose.model("notes", noteSchema);

// export
module.exports = notesModels;
