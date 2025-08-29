const express= require("express");
const app = express();
const port= 8000;



// this will make the package public accisible using url this is not use in main code file other wise 
// entire code will get server so use it with cautions

app.use(express.static("public"))
// app is the main express object , port is the port our server running on 
//  app.get()// path,takes a handler 
app.get("/",(req,res)=>{
    res.send("hello world ")
})
//  the path will decide which url path will server what page 
app.get("/about",(req,res)=>{
    res.send("about is empty lol ! ")
})

app.get("/contact",(req,res)=>{
    res.send("why you want my contact details number! ")
})

// app.get("/lanaguages/java",(req,res)=>{
//     res.send("ik java")
// })

// app.get("/lanaguages/python",(req,res)=>{
//     res.send("ik python")
// })

// path parameters in express:

app.get("/request/:slug",(req,res)=>{
    // fetch parameter form the request 
    // http://localhost:8000/request/234?mode=dark
    console.log(req.params);// give parametes of the url{output: 234 path parameter}
    console.log(req.query);// will give query paramets {output:dark ,, query parameter}
    
    res.send(`what request you send ! : ${req.params.slug}`);
})

app.get("/request/:slug/:slug2",(req,res)=>{
    // fetch parameter form the request 
    res.send(`what request you send ! : ${req.params.slug} , ${req.params.slug2}`);
})

// app.get("/request/:slug:sl",(req,res)=>{
//     res.send(`what request you send ! : ${slug} , ${sl} `);
// })


app.listen(port,()=>{
    console.log("Server Listining at Port :"+port);
});