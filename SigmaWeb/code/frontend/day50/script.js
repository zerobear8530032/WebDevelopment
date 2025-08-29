async function delay(){
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve("resolved");
        }, 5000);
    })
}


// a function which invoke at the time it was created its called IIFE:
(async function execute() {
    let a = await delay();
    console.log(a);
    let b = await delay();
    console.log(b);
})()
// destructuring : we can assign a number of value at a same time to multiple varibles 
// this is like unpacking in python but here the extra elements does not get assigned
let [x ,y, ...rest] = [1,4,7,4,234,235,4];
console.log(x);
console.log(y);
console.log(rest);
let {a ,b, ...r} = {"a":1,"b":2,"c":3};
console.log(a);
console.log(b);
console.log(r);


function sum (a,b,c){
    return a+b+c
}
arr= [1,2,5]
// spread operator 
console.log(sum(...arr))
