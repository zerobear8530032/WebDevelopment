// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 



// console.log(conn);

import express from "express";
import mongoose from "mongoose";
import path from "path";
import { Employee } from "./models/employee.js";
// connect to the server
const port=8000;
const app= express();
app.use(express.static("./public"))
app.set('view engine', 'ejs');
app.set("views",path.join(import.meta.dirname,"views"));

async function connectDB(params) {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/company")
    } catch (err) {
        process.exit(1);
    }
}
await connectDB();

function randomElement(list) {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

async function insertData(data) {
    try {
        const newEmployee = new Employee({ "name": data.name, "salary": data.salary, "language": data.language, "city": data.city, "isManager": data.isManager })
        const saveDoc = await newEmployee.save();
        return saveDoc;
    } catch (err) {
        console.error("Insert failed:", err);
        throw err; // rethrow so caller can handle 
    }
}


async function getData(){
        const data=await Employee.find({}).lean();
        return data;
}

async function isEmpty(){
    try{
        const data= await getData(); 
        return  data.length==0;
    }catch(err){
        console.log(err.stack);
    }
}

async function generate() {
    const names = ["Ethan Carter", "Maya Kapoor", "Liam Hernandez", "Sofia Romano", "Arjun Mehta", "Isabella Chen", "Daniel Novak", "Aisha Khan", "Victor Petrov", "Elena Rossi"];
    const salaries = [45210, 108345, 67239, 33981, 91200, 75015, 36402, 110087, 84722, 53890];
    const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP", "TypeScript"];
    const cities = ["New York", "London", "Tokyo", "Paris", "Sydney", "Berlin", "Toronto", "Dubai", "Singapore", "Mumbai"];
    for (let i = 0; i < 10; i++) {
        let ename = randomElement(names);
        let esal = randomElement(salaries);
        let elang = randomElement(programmingLanguages);
        let city = randomElement(cities);
        let isManager = randomElement([true, false]);

        const data = {
            "name": ename,
            "salary": esal,
            "language": elang,
            "city": city,
            "isManager": isManager
        }
        const success = await insertData(data);

        if (success) {
            console.log("Document " + i + " inserted Successfully :" + JSON.stringify(success));
        }
    }
}

async function emptyData(){
    const data=await Employee.deleteMany({});
    return data;
}


app.get("/",async (req,res)=>{
    const data=await getData();
    res.render("home",{data:data});
})


app.post("/generate",async (req,res)=>{
    await emptyData();
    await generate();
    res.redirect("/");
})
app.post("/delete",async (req,res)=>{
    await emptyData();
    res.redirect("/");
})

app.listen(port,()=>{
    console.log("Server Listing at Port "+port);
})


