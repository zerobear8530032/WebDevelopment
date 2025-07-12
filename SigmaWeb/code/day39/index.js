console.log("Lets Learn more about Strings :")
// 
let name = "saboor";
console.log("String :"+name);

// access character of strings :
// we can acces string character directly using the [index]
// each single character is a string of 1 length
console.log("getting character of a String  : "+name[0]);
console.log("type of each character is a string : "+typeof(name[0]));
// if the  index is not present it give undefine (weird)
console.log("invalid index :"+typeof(name[-1]));
// we can also access character using charAt methid;
console.log("getting character of a String : "+name.charAt(0));

// here we can get length of the array 
console.log("getting length of string : "+name.length)

console.log("pretty printing / fromat printing :")
let friend = "";// i dont have them ;(
    //  template literally syntax :
    console.log(` hi my name is ${name} and my  fridend name is ${friend}`);
    console.log("method change cases :")
    
    let str= "Hello";
    let upperstr= str.toUpperCase();
    let lowerstr= upperstr.toLowerCase();
    
    console.log(`Original : ${str}`);
    console.log(`Upper : ${upperstr}`);
    console.log(`Lower : ${lowerstr}`);
    
    console.log("slicing :")
// slicing in strings : it how we get a part of string  in js strings are immutable so each time we operate on them a new stirng is created as output
let myname= "abdul saboor";
// this slice from 0 till length : similar to substring in java
console.log(myname.slice(0));
// this slice from 1 till length : similar to substring in java
console.log(myname.slice(1));

// here upper bound is not included
// this slice from 1 till length index 3-1 : similar to substring in java
console.log(myname.slice(1,3));
// here upper bound is not included
// this slice from 1 till end and return entire string without any error  : (weird)
console.log(myname.slice(1,34));
console.log("replacing :")

let message= "good morning";
// we can replace a string : importand this only replace first occurence 
console.log(message.replace("morning","night"))
console.log(message.replace("morning","evening"))

console.log("concatination :")
let msg = "good ";
// this add the string 
console.log(msg.concat("morning"));
console.log(msg.concat("evening"));

console.log("Triming strings :")
let spacesstr = "      hello     ";
// this remove all the black space from left and rigth;
console.log(spacesstr.trim());
// this remove all the blank space form the right
console.log(spacesstr.trimEnd());
// this remove all the blank space form the left
console.log(spacesstr.trimStart());

//  splitting stirngs :
console.log("split string in multiple substrings :")
// here we can use a substring to split the string in multiple parts  this give a array of strings :
let sentence = "hey my name is saboor how are you !";
console.log(`original sentence : ${sentence}`);
let splitsentence = sentence.split(" ");
console.log(`split  : ${splitsentence}`);
console.log(`split  : ${typeof(splitsentence)}`);

// we can find a starting index of a substring in js :
console.log("get string index :")
console.log(`index of my  : ${sentence.indexOf("my")}`);

// we can check a string is starting with a particular string or not 
console.log("check string starting with  string :")
console.log(`starts with   my  : ${sentence.startsWith("my")}`);
// we can check a string is ending with a particular string or not 
console.log("check string ending with  string :")
console.log(`endings  with \'!\'  : ${sentence.endsWith("!")}`);





 




