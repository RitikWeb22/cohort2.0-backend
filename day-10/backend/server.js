// server runnning and connecting database

require("dotenv").config();
const app = require("./src/app");
const NotesDBConnect = require("./src/config/database");


// calling database
NotesDBConnect();


// server runing
app.listen(3000, () => {
    console.log("server is runnning port 3000");
});