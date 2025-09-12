import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/todo.js";
const app= express();
const port = 8000;
let conn=await mongoose.connect("mongodb://localhost:27017/todo")
// console.log(a);


app.get("/",(req,res)=>{
    const todo= new Todo({id:34,title:"first todo",description:"ABC",isDone:true});
    todo.save();
    res.send("hello !");
})
app.get("/get",async (req,res)=>{
    const todo =await Todo.findOne({});
    console.log(todo);
    
    res.send({id:todo.id, title:todo.title , description:todo.description, isDone:todo.isDone});
})

app.listen(port,()=>{
    console.log("Server Listining At Port ! "+port);
})
