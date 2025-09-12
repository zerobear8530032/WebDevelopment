import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";
import { Counter } from "./models/Counter.js";
import path from "path";
const app = express()
const port = 8000;


app.set('view engine', 'ejs');
app.use(express.static("./public"));

const __dirname = import.meta.dirname;


// this set the path to the views 
app.set("views", path.join(__dirname, "views"));


//  this will connect with the mongo db and create the Todos database if not present other wise will connect
const conn = await mongoose.connect('mongodb://localhost:27017/Todos');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function getCounter(collectionName, columnname) {
    const count = await Counter.findOne({ "collectionName": "todos", "columnName": "id" }).lean();
    return count["counter"];
}


async function setCounter(collectionName, columnname, newid) {
    const count = await Counter.updateOne({ "collectionName": "todos", "columnName": "id" }, { $set: { counter: newid } }).lean();
    console.log(count);
}



app.post("/submit-todo", async (req, res) => {
    const currId = await getCounter("todos", "id");
    const newId = currId + 1;
    const todo = new Todo({ id: newId, title: req.body.title, description: req.body.description });
    todo.save();
    setCounter("todos", "id", newId);
    res.redirect("/createTodo?success=true");
})


app.get("/createTodo", (req, res) => {
    res.render("form", { success: req.query.success });
})

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({}).lean();
    res.render("home", { todos: todos });
})

app.get("/todos/:id", async (req, res) => {
    try{
        const todos = await Todo.find().lean();
        const idx = Number(req.params.id);
        if (idx<todos.length){
            // give the todo which is asked 
            const todo= todos[idx-1]
            res.json({title:todo["title"],description:todo["description"],isDone:todo["isDone"]});
        }else{
            // give the last todo
            const todo= todos[todos.length-1]
            res.json({title:todo["title"],description:todo["description"],isDone:todo["isDone"]});
        }
    }catch(err){
        console.log(stack());
        res.status(400).send("Some error Occured !")
    }
})


app.post("/todos/:id/delete", async (req, res) => {
    try {
        const status = await Todo.findOneAndDelete({ "id": Number(req.params.id) });
        if (status) {
            console.log("document got deleted" + status);
        } else {
            console.log("cannot delete document" + status);
        }
        res.redirect("/todos");
    } catch (err) {
        console.log(err.stack());
        res.status(400).send("bad Request");
    }
})


app.post("/todos/:id/toggle/:status", async (req, res) => {
    try {
        const isDone = req.params.status === "true";
        const status = await Todo.updateOne({ "id":Number(req.params.id) },{$set:{isDone:isDone}});
        res.sendStatus(200); // <-- send OK for fetch
    } catch (err) {
        console.log(err.stack);
        res.status(400).send("bad Request");
    }
})



app.listen(port, () => {
    console.log("Server is Online On Port !" + port);
})





