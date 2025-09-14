import mongoose from "mongoose";
const employeeSchema=mongoose.Schema({
    name:String,
    salary: Number,
    language: String,
    city:String,
    isManager:{type:"Boolean",default:"false" }
})


export const Employee= mongoose.model("employee",employeeSchema);

