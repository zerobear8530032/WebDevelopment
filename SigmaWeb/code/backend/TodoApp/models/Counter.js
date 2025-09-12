import mongoose from "mongoose";

const counterSchema= new mongoose.Schema({
    collectionName : String,
    columnName: String,
    counter:Number
})


export const Counter= mongoose.model("counter",counterSchema);