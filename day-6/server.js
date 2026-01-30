const app = require("./src/app");
const MongoDB = require("mongoose");

function MongodbConnect() {
    MongoDB.connect("dbrul).then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log(err);
    });
}

MongodbConnect();

app.listen(3000, () => {
    console.log("Server is running port 3000");
});
