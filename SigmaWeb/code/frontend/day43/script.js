console.log("Targetting elements in JS ");


// this gives all element which have a paticular class 
let boxes= document.getElementsByClassName("box");
console.log(boxes);

let output=document.getElementsByClassName("output");

boxes[2].style.backgroundColor="red";

// this will get first element which have the same id 
// because it is a good practice to have a single id for a single element s
let greenbox = document.getElementById("green");
console.log(greenbox);
greenbox.style.backgroundColor="green";
//  this get the first element with the given query query is similar to the css selectors 
document.querySelector(".box").style.backgroundColor="purple";

//  this get all elements with the given query query is similar to the css selectors this return nodelist

let allQuery = document.querySelectorAll(".box")
console.log(allQuery);

allQuery.forEach((e)=>{
    e.style.backgroundColor="rgb(100,100,23)";
})


// get Elements by tag name: will give all tags which have the given name : this return collection elements

let allDivs= document.getElementsByTagName("div");
console.log(allDivs);
// let allhulla= document.getElementsByTagName("hulla");
// console.log(allhulla);

// matches : this allow us to give a css selector and find wheather it matches the given selector it returns boolean 

for (let i =0;i<allDivs.length;i++){
    console.log(allDivs[i].matches("#green"));
}

// closest : it find parent with the matching selector and can return either null itself  or parent or grandparetns  :

console.log(allDivs[0].closest("box"))

// contains : it checks weather a parent contains the element given in it or not return true , false , if the parent container 
// and child are same it will return true;

let child = document.querySelector("body");
console.log(child);
let container = document.querySelector(".container");
console.log(container.contains(child));
child = allDivs[2]
console.log(container.contains(child));