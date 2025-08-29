let btn = document.getElementById("btn");
let count=0;
btn.addEventListener("click",() =>{
    let box = document.querySelector(".box");
    count++;
    console.log(box);
    box.innerHTML="hello you clicked me ! "+count;
})
btn.addEventListener("dblclick",() =>{
    let box = document.querySelector(".box");
    count++;
    console.log(box);
    box.innerHTML="hello you double  clicked me ! "+count;
})
btn.addEventListener("contextmenu",() =>{
    let box = document.querySelector(".box");
    count++;
    console.log(box);
    box.innerHTML="hello right clicked  ! "+count;
})
btn.addEventListener("keydown",(e) =>{
    let box = document.querySelector(".box");
    count++;
    console.log(e);

    box.innerHTML=e.key;
})