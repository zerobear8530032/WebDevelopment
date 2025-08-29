console.log("hello this is coditional in java scripts")
let age=67;
// here this is wrong it assign age = 18 and in js 0 is false and any other number is true age becomes 18 and it evaluted true 
// if(age=18){
//     console.log("your age is "+18);
// }


if(age>18){
    console.log("You can drive ");
}else if(age==18){
    console.log("You have a licence");    
}else if(age<0){
    console.log("are you sure about your age  :"+age);    
}
else{
    console.log("You cannot  drive ");
}


// arithmetic operator
let a = 23;
let b = 2;
console.log("addition : "+(a+b));
console.log("substraction : "+(a-b));
console.log("multiplication : "+(a*b));
console.log("division : "+(a/b));
console.log("remainder : "+(a%b));
console.log("exponent : "+(a**b));
console.log("increment by 1 : "+(a++));
console.log("decrement by 1 : "+(b--));

// assignment operator exactly same as java :
// = : assign value
// x+=b : add x + b and assign value at x
// x-=b : sub x - b and assign value at x
// x*=b : mul x * b and assign value at x
// x/=b : div x / b and assign value at x
// x%=b : remainder x % b and assign value at x
// x**=b : exponent x ** b and assign value at x

// comparision operator :
// == : check both objects are equal 
// != : check not equal to menas x !=y
// === : check both equal as well at its type 
// !== : check both equal as well at its type and evalute true if its not equal 


// logical operators : these operators are used to combine more then 1 condition at a time:
// &&: this is logical and
// || : this is logical or 
// ! : this is logical not and its a unary operator 


// ternary operator :

let c= 23;
let d= 23;
let e= c*2==d? true : false;
// here we can check condition c*2==d if its true c assigned true other wise false  its same as java 