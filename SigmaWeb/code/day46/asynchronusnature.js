console.log("hello first line !")
console.log("hello second line !")

// in js this is a function which need to be executed later thats why it will at its settime but the rest of program will execute as it is 
let time1=setTimeout(() => {
    console.log("hello i run after 2 seconds");
}, 2000);
let time2=setTimeout(() => {
    console.log("hello i am time2 ");
}, 1000);



console.log("End of program !");

function callback(arg){
    console.log("script got loaded : "+arg);
}
const loadscript=(src,callback)=>{
    let sc = document.createElement("script");
    sc.src=src;
    sc.onload=()=>{callback(src)};
    document.head.appendChild(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);
// call back hell is a concept where we have a  function
// take takes a function as argument and that function also take a function as argument and this create 
// a long chain of function passing as arguments makes the code  very complex and not easy to interpret