// give the format and model creating
const mongoose = require("mongoose");


// schema creating (format giving)

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
});

// model creating
const notesModel = mongoose.model("notes", noteSchema);

module.exports = notesModel;