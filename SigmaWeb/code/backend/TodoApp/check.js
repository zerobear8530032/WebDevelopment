import {Counter}  from "./models/Counter.js";
import mongoose from "mongoose";
//  this will connect with the mongo db and create the Todos database if not present other wise will connect
const conn= await mongoose.connect('mongodb://localhost:27017/Todos');
async function getCounter(collectionName,columnname){
    const count= await Counter.findOne({"collectionName":"todos","columnName":"id"}).lean();
    return count["counter"];
}


async function setCounter(collectionName,columnname, newid){
    const count= await Counter.updateOne({"collectionName":"todos","columnName":"id"},{$set:{counter:newid}}).lean();
    console.log(count);
}


setCounter("todos","id",1);