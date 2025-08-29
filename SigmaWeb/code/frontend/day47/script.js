// this make the function to work in background
// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(405);
//         }, 3500);
//     })

// }

// console.log("load module")
// console.log("do some thing else")
// let data = getdata();

// this is one way to make a code wait for the big function to wait for the data 
// to load 
// data.then((e)=>{
//     console.log("promise resolved !")
//     console.log(data);
//     console.log("do some thing else")
// }).catch((e)=>{
//     console.log("promise cannot resolved  !")
//  })


// we can put the code in a function which will wait for the above async function to complete its work 
async function getdata(){
    // here we await to get data 
let request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// here we await for data to convert tojson
let data= await request.json();
return data;
}
async function  main(){
    
    console.log("load module")
    let data = await getdata();//  this will wait for above function to get the data 
    console.log(data);
    console.log("continue work ")
}
main()