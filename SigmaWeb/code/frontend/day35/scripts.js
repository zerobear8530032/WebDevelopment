console.log("hey this is java script");
// creating variable in js:

// in js we can create a variable using a character 
// $ ,  _ but it cannot be a dollar character to create a varable
// var 13f=324; this is invalid 
var a=23;
var b = 223;
var c = a+b;
console.log(a +"  + "+b+" = "+c);
// this allow us to get type of variable
console.log(typeof(a));

// let vs const vs var:

const a2= 34;
// once we assigm a const variable we cannot assign a new value to it
// it make the reference pointer or variable name to have a single particular object 
// but we can change object property but we cannot reassign the variable 
console.log(a2);
// this is not allowed 
// a1=a1+1;
console.log()


// var is a not a block scope variables means it always hoist over the block
{// this will access outsidde of block 
    var message="hello";
    console.log("this is from inside :"+message);
} 
console.log("this is from outside :"+message);
console.log(message);

{
    let greet = "good morning";
    console.log("this is from inside :"+greet);
}
// console.log("this is from outside :"+greet);

let str= "saboor";
let int= 123;
let float= 23.34;
let boolean = true;
let unknown = undefined;
let empty =null;

console.log(str+" : "+typeof(str));
console.log(int+" : "+typeof(int));
console.log(float+" : "+typeof(float));
console.log(boolean+" : "+typeof(boolean));
console.log(unknown+" : "+typeof(unknown));
console.log(empty+" : "+typeof(empty));


// in js : null is a object type  and its a bug which is not solved because of legacy code  
// | Concept     | Description                                                                                                                                                                             |
// | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
// | `undefined` | 🔹 Variable is declared, but **memory is reserved without a value assigned**<br>🔹 The **JavaScript engine automatically gives it `undefined`** until you assign something              |
// | `null`      | 🔹 Memory **is allocated**, and **you intentionally assign it** to mean “no value”<br>🔹 It’s a placeholder that **you, the developer**, use to say: “this should have something later” |


//  object is non - primitive type of varainles :
//  here we can create obejct as a key value pairs 
// like a hashmap in java

o={
    "name":"zero",
    "job":"software engineer",
}

console.log(o);
//  add a value at the object :

o.salary=100000;

// change value
console.log(o);

o.name= "zerobear";
console.log(o);

let key = "age";
o[key] = 25;
console.log(o);


