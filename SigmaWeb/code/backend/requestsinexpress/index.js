const express = require("express");
const path = require("path");
const extra = require("./routes/extraroutes");
const app = express()// initalizing the object of express
const port = 8000;

//  this willl create a routes from the routes folder routes
//  at path routes and end points
app.use("/routes",extra)


//  a simple get request is used to render a simple html file 
// or getting a data 
app.get("/",(req,res)=>{
    res.send(" hello how are you !");
    console.log("hello get requests ");

})
// post request is used to send data to the server which are heavy 
// or need to be secure 
app.post("/",(req,res)=>{
    res.send(" hello how are you !");
    console.log("hello post requests ");
})
// delete is used to delete records from db
app.delete("/",(req,res)=>{
    res.send(" hello how are you !");
    console.log("hello delete requests ");
})
// put is use to update records
app.put("/",(req,res)=>{
    res.send(" hello how are you !");
    console.log("hello put requests ");
})
//  patch is similar to put
app.patch("/",(req,res)=>{
    res.send(" hello how are you !");
    console.log("hello patch requests ");
})


app.get("/page",(req,res)=>{
    res.sendFile("templates/index.html",{root:__dirname})// this want a root path of the file 
    // or absolute path 
    console.log(__dirname);
    
})

app.get("/api",(req,res)=>{
    res.json({"a":2,"b":23});
})

app.listen(port,()=>{
    console.log("Server is Listining at port : "+port);
})