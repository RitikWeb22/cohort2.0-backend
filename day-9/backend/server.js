// server running and mongodbconnect

require("dotenv").config();
const app = require("./src/app");
const mongodbConnect = require("./src/config/database");


// mongodbconnected
mongodbConnect();

// server running 
app.listen(3000, () => {
    console.log("server is running on port 3000");
});