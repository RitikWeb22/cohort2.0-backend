// creating database

const mongoose = require("mongoose");

const mongodbConnect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("mongodb connected successfully!");
    }).catch((err) => {
        console.log("something is wrong", err);
    });
};


module.exports = mongodbConnect;