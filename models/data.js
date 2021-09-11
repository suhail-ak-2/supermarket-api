const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    category: String,
});

let data = mongoose.model("Categorys", dataSchema);
module.exports = data;
