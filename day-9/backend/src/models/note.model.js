// database ko batana ki kis format mai data save hoga database

const { default: mongoose } = require("mongoose");
// format
const notesSchema = new mongoose.Schema({
    title: String,
    description: String
});


// model create
const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;