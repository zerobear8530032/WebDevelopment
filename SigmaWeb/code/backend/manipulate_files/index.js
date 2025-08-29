
import fs from "fs";
console.log("starting");
// fs.writeFileSync("hello.txt","hello this is a file !");// this will write at file synchronus way 
fs.writeFile("hello2.txt","hello this is a second file",()=>{
    // reading file also
    fs.readFile("hello2.txt",(error,data)=>{
        console.log(error,data.toString())        
    })
    console.log("write file complete")
});// this is a async function which execute in background 

fs.appendFile("hello2.txt","\nthis is the second line ",(e,d)=>{
    console.log(e);
    console.log(d);// here data is the string present in the file 
    
    console.log("append done");
})



console.log("ending");




