let a = prompt("Enter a Number");
let b = prompt("Enter a Number");
a=parseInt(a);
b=parseInt(b);
if(isNaN(a) || isNaN(b)){
    // throwing custom error :
    throw SyntaxError("you Enter invalid Number")
}
console.log("Sum : "+(a+b));
// how to handle error :
try{
    alert(a*x);
}catch(e){
    console.log(e);
    console.log(e.name);
    console.log(e.stack);
    console.log(e.message);
    
}finally{
    console.log("Release the resources !")
}
console.log("rest of the code")