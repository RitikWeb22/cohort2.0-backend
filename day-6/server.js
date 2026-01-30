const app = require("./src/app");
const MongoDB = require("mongoose");

function MongodbConnect() {
    MongoDB.connect("mongodb+srv://ritikweb30_db_user:idEjTU8KFdhqnaT2@cluster0.bpriw9o.mongodb.net/day-6").then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log(err);
    });
}

MongodbConnect();

app.listen(3000, () => {
    console.log("Server is running port 3000");
});