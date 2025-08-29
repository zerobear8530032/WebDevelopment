// if we wana use common js we can use required syntax we can  import the modules :



// In Node.js, require is not something you write yourself—it’s automatically provided by the CommonJS module system. When you run a file with Node using CommonJS:

// Node wraps your file code in a function behind the scenes, something like this:

// (function(exports, require, module, __filename, __dirname) {
//     // Your code actually lives here
// });


// This is why you can just use require, __dirname, __filename, exports, and module directly—they are injected into your file’s scope by Node.

// You don’t have to define them, Node does it for you automatically.
const obj = require("./module2.js")

console.log(obj.add(1,3))
console.log(obj.div(1,3))
// console.log(obj.mul(1,3))// this is not present in our export that why it does not get imported 
console.log(obj.sub(1,3))