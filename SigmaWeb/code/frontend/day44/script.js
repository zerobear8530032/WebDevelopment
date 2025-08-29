// this will give entire html tag element of the box 
let innerhtml = document.querySelector(".box").innerHTML;
console.log(innerhtml);
console.log(typeof(innerhtml));
// tthis will give the box innertext content of the div
let innertext = document.querySelector(".box").innerText;
console.log(innertext);
console.log(typeof(innertext));
// this will return the container  inner html elements texts if multiple elements are there then it will be line break strings
let cont = document.querySelector(".container").innerText;
console.log(cont);
console.log(typeof(innertext));

// this will return the container in which they are present as well as the the inner html
let outercont = document.querySelector(".container");
console.log(outercont);
console.log(typeof(outercont));


// we can also get nodename, tag name
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").tagName);

console.log(outercont.nodeName)
console.log(outercont.tagName)
// this give all text which are present 
console.log(outercont.textContent)

// this set entire html to what we pass 
// outercont.innerHTML="hey i am zero";

let para = document.querySelector("p");
// para.innerHTML="hey i am zero"

// check a attribute exists in an element
console.log(para.hasAttribute("id"));
// get a attribute exists in an element
console.log(para.getAttribute("style"));

// set a attribute
para.setAttribute("style","background-color:pink");

// get all attributes :
console.log(para.attributes)

// remoe attribute
para.removeAttribute("style");
// accessing custome data
console.log(para.dataset)



// create an element using js :
let div = document.createElement("div");
div.setAttribute("style","height:100px;width:100px;background-color:yellow;margin:5px");
div.innerHTML="hey i am div created by java script"


// added element by append :
document.querySelector(".container").append(div);