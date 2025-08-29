const express = require("express");
const fs = require("fs");
const app = express();
const port =8000;


// middle ware is a code or a function which can run before the request passed down to other middle ware or a request handler;
// a middle ware contains a request,response,next middleware
// when the server gets a request it will first pass through handlers and it
// all handlers process it and passed them till the end it will reach the path handler
// other wise a middle ware can also send response directly to the user 
// it can be used to logg data , apply auth, and verify request
// there are several types of middle ware
// inbuild: created by js and can be used directly
// userdefine : created by user can we apply using use and pass a function
// router : these apply to only a particular routes 
// application : these apply to all the path in entire application
// 3rd party : similar to userdefine some packages have there own middle ware which we can use 
app.use(express.static("public"))
app.use((req,res,next)=>{
    console.log("hello this is middle ware 1");
    // const num = Math.ceil(Math.random()*10);
    // console.log(num)
    // if(num%2==0){
    //     res.send(" Middle ware 1 hacked you ")
    //     // here the res is send we cannot send any thing else 
    //     // sending stream is ends 
    // }else{
    //     // without this the middle ware will nto run and the entire process will stop;
        next()// next will call the next middle ware
    // }
})
const path = "public/log.txt"
// logging middle ware
app.use((req,res,next)=>{
    const date = new Date(Date.now());
    fs.appendFileSync(path,`Request :${req.method} , Time : ${date.toString()} , Route : ${req.path} \n`);   
    next() 
})


app.use((req,res,next)=>{
    console.log("hello this is middle ware 2");
    req.msg= "hello this is message from middleware 2 ";
    next()// next will call the next middle ware
})


app.get("/",(req,res)=>{
    res.send("hello !"+req.msg);
})
app.get("/about",(req,res)=>{
    res.send("hello about!");
})
//  this middle ware is a middle ware only run at contact 
const contactware=(req,res,next)=>{
    console.log("This is middle ware run only at contact");  
    next()
}
// here we can pass this middle ware as a function or a array of middlle ware 
// and they will execute as a sequence
app.get("/contact",contactware,(req,res)=>{
    res.send("hello contact !");
})
const errorhandler = (err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("error occur !");
    // next()
}
app.get("/error", (req,res, next)=>{
    // simulate an error
    const err = new Error("Something went wrong!");
    next(err); // pass the error to the error middleware
});

// register the error middleware **after all routes**
app.use(errorhandler);

app.listen(port,()=>{
    console.log("Server Listening at Port "+port);
})