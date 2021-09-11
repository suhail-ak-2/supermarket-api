const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    values  : Array,
    category :String , 
});

let collections = mongoose.model("collections", collectionSchema);
module.exports = collections;
