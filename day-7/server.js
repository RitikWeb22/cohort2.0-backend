// server start and database connected
require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

// database connected
connectToDB();

// server started
app.listen(3000, () => {
    console.log("server is running port 3000");
});