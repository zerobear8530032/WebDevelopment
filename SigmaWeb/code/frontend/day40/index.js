//  arrays in js :
console.log("java script Arrays :")
// these are use to store multiple values in a single variabale 
// in js a arrays is a list not a particular array like java 

let arr = [1,2,3,4,5,6];
console.log(arr);
// length of the arr
console.log(`length : ${arr.length} `);

// accessing element in array :
console.log(arr[1]);
console.log(arr[324]);
// changing array : they are mutable we can change array 


arr[1]=32;
console.log(`array : [${arr}] `);
//  methods of arrays :
// convert array to string
console.log(arr.toString());
//  methods of arrays :
// joining element in array
console.log(arr.join("->"));

// it remove the last element :of array 
console.log(` poped elements : ${arr.pop()}`);
console.log(`after pop : ${arr}`);

// it remove the last element :of array 
// push also return the new length of the array 
console.log(`push elements : ${arr.push("zero")}`);
console.log(`after push  : ${arr}`);

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr.shift())
// Inserts new elements at the start of an array, and returns the new length of the arrays
console.log(arr.unshift("jack"))

// delete element from array :
// it keeps the memory but remove the value in the array
delete arr[2];
console.log(arr);


let a1=[1,3,5];
let a2=[1,32,5];
let a3=[1,34,51];

// we can combine all the array as a new bigger array 
let a4= a1.concat(a2,a3);
console.log(a4);


// this sort the array 
a2.sort();

console.log(a2);

// this replace a array from  given index element from array the upper bound is included
console.log("before splice :"+a4);
console.log("splice :"+a4.splice(1,2));
console.log("after splice :"+a4);

// we can add number too with splice:

console.log("before splice :"+a4);
console.log("splice :"+a4.splice(1,2,23,23,123,2));
console.log("after splice :"+a4);



console.log("before splice :"+a4);
console.log("splice :"+a4.slice(1,2));
console.log("after splice :"+a4);

// loops on array :

let array= [3,4,342,23,123,24324,322343,3];
for (let index = 0; index < array.length; index++) {
    let element = array[index];
    console.log(element);
}


// for in loop
for (let e  in array) {
    console.log(e);
}

// 

array.forEach((value)=>{
    console.log(value);
})

//  map , reduce , filter:

let arr1= [1,2,4,12];
// let sqrarr= []
// for(let i in arr1){
//     sqrarr.push(arr1[i]**2)
// }
// console.log(sqrarr);

let sqrarr= arr1.map((e)=>{return e**2})
// 
let even= arr1.filter((e)=>{if(e%2==0) {return true}else{return false}})
let odd= arr1.filter((e)=>{if(e%2!=0) {return true}else{return false}})


console.log(sqrarr);
console.log(even);
console.log(odd);

// reduce : it take a array of  object and compress them  by applying a single function to create the result 
let arr2= [1,34,3,1]
let mul = arr2.reduce((e1,e2)=>{return e1*e2;})
console.log(mul);

// create a array from object :
let newarr=Array.from("zerobear");

console.log(newarr);
