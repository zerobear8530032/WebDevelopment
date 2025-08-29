console.log("Hello World");

console.log(document.body.childNodes);


// this will give us child nodes
for  (let node of document.body.childNodes){
    console.log(node);

}

// we can get only element noeds :
let cont = document.body.firstElementChild;
console.log(cont);

// getting parent continer from child
let parent=cont.parentElement;
console.log(parent)

let nextelement = cont.nextElementSibling;
let prevelement = cont.previousElementSibling;