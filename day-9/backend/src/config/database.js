const mongoose = require("mongoose");

const mongodbConnect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("mongodb is connected successfully!");
    }).catch(() => {
        console.log("something is worng in database");
    });
};

module.exports = mongodbConnect;