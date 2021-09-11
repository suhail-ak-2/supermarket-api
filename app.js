const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const routes = require('./routes/endpoints');
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Establishing connection with database
const DB_URL = 'mongodb+srv://user799:user799@database.qnbne.mongodb.net/Shop?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
  );
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));


//retrieving all data
app.use("/", routes.common);


const server = app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);

});

