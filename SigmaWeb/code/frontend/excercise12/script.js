function getRandomColor(){
    let red= Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
}



let container=document.querySelector(".container");

let childdivs= container.children;

for(let e of childdivs){
    let background=getRandomColor();
    let color=getRandomColor();
    e.style.backgroundColor=background;    
    e.style.color=color;
    e.innerHTML=`background : ${background} , color : ${color}`;       
}
