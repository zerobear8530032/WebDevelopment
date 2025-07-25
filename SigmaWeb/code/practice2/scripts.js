// take input from user until user enter 0
let array=[];
while(true){
    let usernum = prompt("Enter a number");
    array.push(usernum);
    if(usernum===undefined){
        continue;
    }
    if(usernum==="0"){
        document.querySelector(".output").innerHTML=array;
        break;
    }
    console.log("hello!");
}

let filterarr= array.filter((e)=>{ return e%10==0});
let newdiv=document.createElement("div")
newdiv.innerHTML=filterarr;
document.querySelector(".output").insertAdjacentElement("afterbegin",newdiv);
let sqrarr= array.map((e)=>{ return e*e});
newdiv=document.createElement("div")
newdiv.innerHTML=sqrarr;
document.querySelector(".output").insertAdjacentElement("afterbegin",newdiv);
