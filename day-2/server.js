const express = require("express");

const app = express(); //server created

// routing
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/about", (req, res) => {
    res.send("Home Page");
});
app.get("/contact", (req, res) => {
    res.send("Home Page");
});
app.listen(3000); // server runnng