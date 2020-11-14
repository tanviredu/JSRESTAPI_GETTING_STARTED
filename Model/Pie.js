const mongoose = require("mongoose");
const Schema = mongoose.Schema
const PieSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    wholePrice: {
        type: Number,
        required:true
    },
    slicePrice: {
        type: Number,
        required:true
    },
    sliceCalories: {
        type: Number,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    }
    
})
module.exports = mongoose.model("Pie", PieSchema);