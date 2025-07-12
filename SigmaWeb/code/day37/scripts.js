console.log("lets learn loops :");
// there are 4 types of loops in java scripts :
// 1 for loop : this loop is used to execute  a task a certain amount of time :
for(let i=0;i<100;i++){
    console.log(i);
}


// for in loop : this is used to iterate a particular object :

obj = {
    name:"zerobear",
    job:"programmer",
    sal:10000,
}
for (const key in obj) {
    console.log(key+ "  : "+obj[key]);
}

// this is a for of loop which act as a iterator over the given object
for(const char  of "zerobear"){
    console.log(char);
}

// while loop is running a loop untill the condition in true:
let i = 12;
while(i>10){
    console.log(i);
    i--;
}

console.log("do while loop ")
// do while loop run at least once :
let x = 12;
do{
console.log(x);
x--;
}while(x>12);