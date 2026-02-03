const mongoose = require("mongoose");

// creating database
const NotesDBConnect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("mongoDB Connecting successfully!");
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = NotesDBConnect;