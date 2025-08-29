// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorImage(str){
    let revstr= "";
    for(let i =str.length-1 ;i>=0;i--){
        revstr+=str[i];
    }
    return str+revstr;
}

const s1= "ABC";
console.log(mirrorImage(s1))

const s2= "ABCD";
console.log(mirrorImage(s2))

const s3= "ABCDEF";
console.log(mirrorImage(s3))

const s4= "23424";
console.log(mirrorImage(s4))

const s5= "";
console.log(mirrorImage(s5))