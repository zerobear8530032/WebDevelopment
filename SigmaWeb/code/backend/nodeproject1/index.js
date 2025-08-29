//  we use require module to import a module in common js code
// const http = require("http"): common js syntax
// import http from "http": modern syntax used when we import from a module type 

import {add,sub} from "./module1.js"// importing a particular object/function froma modules
//  this is called names export we use a specific name to import the module
console.log(add(2,3));
console.log(sub(2,3));
import def from "./module1.js"
// importing default modules functions this only give default methods present in the defaults

console.log(def.sub(2,3));
// console.log(def.add(2,3));// here we cannot call add because its not present in default export 
console.log(def.mul(2,3));
