import mongoose from "mongoose";

const todoSchema  = new mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    isDone: Boolean
}) 

export const Todo = mongoose.model("todo",todoSchema);
