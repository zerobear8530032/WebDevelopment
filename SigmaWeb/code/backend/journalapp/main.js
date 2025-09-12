import express from "express"
import Note from "./classes/note.js"
import path from "path"
import fs from "fs"
const app = express()
const port = 8000;

//  this middle ware is used to handle post request without it we cannot procceed
// extend true will allow us to parse nested object also in post request body 
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }));
// this handle the json request
app.use(express.json());

// current db is a note array we will change it later 
const db = [];
const __dirname= import.meta.dirname;
console.log(__dirname);

// this set the path to the views 
app.set("views", path.join(__dirname, "views"));
// let load the template enginer 
app.set('view engine', 'ejs')

app.use((req,res,next)=>{
    const filepath= path.join(__dirname,"logs.txt");
    const logmsg = `Method : ${req.method} ,Time : ${new Date(Date.now()).toString()} , Path : ${req.path}\n`;
    fs.appendFileSync(filepath,logmsg);
    console.log("Log Done");
    next();  
})

app.get("/",(req,res)=>{
    res.render("homepage",{ notes:db})
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/getAllNotes",(req,res)=>{
        res.json(db);   
})

app.get("/compose",(req,res)=>{
    res.render("compose");
})


app.get("/show",(req,res)=>{
    res.render("show",{variables:"<b>hello</b>",arr:[2,2,4,51]});
})


app.get("/pages/:pageno",(req,res)=>{
     const pageno = Number(req.params.pageno);
    if (isNaN(pageno) || pageno < 1 || pageno > db.length) {
    return res.status(404).render("error", { message: "Invalid page number" });
  }
  res.render("page", { pagedata: db[pageno - 1] });
})
app.get("/page/delete/:pageno",(req,res)=>{
    const pageno= Number(req.params.pageno)-1
    db.splice(pageno,1);
    res.redirect("/");
})

app.post("/addjournal", (req, res) => {
    console.log(req.body);
    const body = req.body;
    const noteEntry = new Note(body["title"],body["author"],body["description"],Date.now());
    db.push(noteEntry);
    console.log("Added the Data in DB");
    res.redirect("/compose");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).send("Page Not Found");
});

app.listen(port,()=>{
    console.log("Server is Listining at Port "+port);
})