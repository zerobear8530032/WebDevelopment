console.log("lets learn function :");
//  function are use to create a block of code which can be execute any where multiple times by creating once
// here we use a key word function
// creating
function greet(name){
    console.log("good morning "+name);

}

// calling function:
greet("zerobear");
greet("aman");
// here the function value is undefine because the function does not return a value 
console.log(greet("jnsf"));
greet("sahu");

// this function returns a value 
function sum(a , b){
    return a+b
}
console.log(sum(12,40));
console.log(sum(11,42));
console.log(sum(1,40));
console.log(sum(1,2));


// we can also pass optional parameter in js :
// if we pass the c argument it will take it other wise it will take the default argument
function evalute(a,b,c=2){
    console.log("value of b "+b);
    return (a+b)*c
}

// 
console.log(evalute(1,2,3));
console.log(evalute(a=22,b=21));

// arrow function / lambda function :

// this is a varaible which is a function 
let func=(x)=>{
    console.log("you passed  :"+x);
}

console.log(typeof(func))