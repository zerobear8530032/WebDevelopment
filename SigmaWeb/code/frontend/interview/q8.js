// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function doubleArr(arr){
    const res= [];
    const promises= arr.map((x)=>{return delay(x)});
    return promises;
}
async function delay(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => { 
            console.log("TaskProcessing");
            resolve(x*2);
        }, 500);
    })

}
async function main(){
    const arr= [13,5,78,1];
    const promises= await doubleArr(arr);
    console.log(promises);// get all promises   
    const results = await Promise.all(promises); // wait for all to resolve
    console.log(results); // [26, 10, 156, 2]
 
}
main()