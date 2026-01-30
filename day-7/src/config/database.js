const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("database connected successfully!");
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = connectToDB;