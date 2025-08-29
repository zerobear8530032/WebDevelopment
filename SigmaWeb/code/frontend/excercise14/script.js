console.log("hello hacker terminal here!")
async function printTexts(){
    const arr= ["Initializing Hacking","Reading your Files","Password files Detected","Sending all passwords and personal files to server","Cleaning up"];
    let interval;
    for(let msg of arr){
        await print(msg);
        interval=setInterval(()=>{
            let container = document.querySelector(".container");
            let lastchild = container.lastElementChild;
            if(lastchild.innerHTML.endsWith("...")){
                let str=lastchild.innerHTML;
                lastchild.innerHTML= str.substring(0,str.length-3);
            }else{
                let str=lastchild.innerHTML;
                lastchild.innerHTML= str+".";
            }
        },500)
         await new Promise((resolve) => {
            setTimeout(() => {
                clearInterval(interval);      
                resolve();
            }, 5000);
        });
    }
    print("thanks for your data :) ")
}

async function print(msg) {
    const container =document.querySelector(".container");    
        let interval = Math.random()*10000;
        console.log(interval);
        return new Promise((resolve) => {
        setTimeout(() => {
            let p = document.createElement("p");
            p.innerHTML = msg;
            container.append(p);
            resolve("done"); // Now resolves after timeout and DOM update
        }, interval);
    });
}





printTexts();
