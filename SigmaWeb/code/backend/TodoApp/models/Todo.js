
import mongoose from "mongoose";

//  define schema 
const Schema = mongoose.Schema({
    id:{type:Number , require:true},
    title:{type:String , require:true },
    description:{type:String },
    isDone :{type:Boolean , default:false}
},{strictEqual:true})

//  cretea a model form schema 
export const Todo = mongoose.model("Todo",Schema); 