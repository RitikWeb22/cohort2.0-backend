// server running and mongodb connected

const app = require("./src/app");
const mongodbConnect = require("./src/config/database");
// middleware
require("dotenv").config();



// database connected
mongodbConnect();




// server is running
app.listen(3000, () => {
    console.log("server is running on port 3000");
});