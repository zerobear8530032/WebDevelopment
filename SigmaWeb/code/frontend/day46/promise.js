
// promise is a object which take a function which 
// take 2 function one is reject and one is resolve 
// now we can perform any thing here amd call resolve if we wana 
// continue other wise we can reject and this will reject the promise
// then we can perform our operation on that basic 
// rsolve access by then and reject access by catch
// the promise keep  the execution stream line like synchronus programming 
const prom1= new Promise((resolve,reject)=>{
    let time1=setTimeout(() => {
        console.log('my work is done here ');
        clearInterval(time2);
        resolve("ok");
    }, 3000);
    let time2=setTimeout(() => {
        console.log("my work got intrupted !");
        clearTimeout(time1);
        reject("cancle")
    }, 5000);

})

prom1.then((e)=>{
console.log('promise resolved'+e);
})
prom1.catch((e)=>{
console.log('promise got rejected '+e);
})
prom1.finally((e)=>{
    console.log("this is the finally block")
})


const prom2= new Promise((resolve, reject)=>{
    let ran = Math.random();
    if(ran<0.5){
        reject("Sorry random is smaller then 0.5");
    }else{
        resolve("random random is greater then 0.5");
    }    
})

prom2.then((e)=>{
    console.log("resolved "+e);
}).catch((e)=>{
    console.log("rejected "+e);
}).finally(()=>{
    console.log("this is the finally block")
})

let p1 = new Promise((resolve,reject)=>{
  let ran = Math.random();
    if(ran<0.5){
        reject("Sorry random is smaller then 0.5");
    }else{
        resolve("random random is greater then 0.5");
    }  
})
let p2 = new Promise((resolve,reject)=>{
  let ran = Math.random();
    if(ran<0.5){
        reject("Sorry random is smaller then 0.5");
    }else{
        resolve("random random is greater then 0.5");
    }  
})
// this resolved when all proomise passed here are resolved
// let p3= Promise.all([p1,p2])

// p3.then((e)=>{
//     console.log("all promise resolved")
//     console.log(e);
// }).catch((e)=>{
//     console.log("not all promise resolved")
//     console.log(e);
// })


// this resolve will return a object of  all promise either reject or resolved  are resolved
// let p3= Promise.allSettled([p1,p2])

// p3.then((e)=>{
//     console.log("all promise resolved")
//     console.log(e);
// }).catch((e)=>{
//     console.log("not all promise resolved")
//     console.log(e);
// })

// this resolve will return first promise which got resolved
let p3= Promise.race([p1,p2])

p3.then((e)=>{
    console.log("all promise resolved")
    console.log(e);
}).catch((e)=>{
    console.log("not all promise resolved")
    console.log(e);
})
