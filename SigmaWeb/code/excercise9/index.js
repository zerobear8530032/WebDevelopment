// create a fault calculator using java script it takes 2 number from user 
// it perform wrong operations as follows :
// + = - 
// * = + 
// - = / 
// / = ** 
// ** = %
// % = **
// it performs wrong operation 10% of the time  

let a= 23;
let b= 2;
let operation = "-";

let operatormap = {
"+": "-",
"*": "+",
"-": "/",
"/": "**",
"**": "%",
"%": "**"
}

let random =  Math.floor(Math.random() * 100) + 1 ;
let operator = random> 10?  operation: operatormap[operation];
console.log(random)
console.log(operator)
if(operator==="+"){
    console.log(a+b);
}else if(operator==="-"){
    console.log(a-b);
}else if(operator==="*"){
    console.log(a*b);
}else if(operator==="/"){
    console.log(a/b);
}else if(operator==="**"){
    console.log(a**b);
}else if(operator==="%"){
    console.log(a%b);
}else{
    console.log("i dont know this operations ");
}








