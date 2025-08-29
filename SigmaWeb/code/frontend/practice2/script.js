// print marks of a student in object :
obj={"aman":21 , "zero":12 , "zara":23, "sahu":21}

for (let keys in obj){
    console.log(` ${keys}: ${obj[keys]}`);
}

// for( let i=0; i<obj.l)
// // for (const e of obj) {
// //     console.log(e);
// // }

function getamount(str){
    let amount = "";
    for (const e of str) {
        if(e>="0" && e<='9'){
            amount+=e;
        }
    }
    return amount;
}
console.log(     getamount("Please give RS 1000"))


function changeForthCharacter(str, newchar){
    if(str.length<4){
        return str;
    }
    let arr=Array.from(str);
    arr[3]=newchar;
    return arr.join("");
}
function changeForthCharacter2(str, newchar){
    if(str.length<4){
        return str;
    }
    
}

console.log(changeForthCharacter("fsdfg","2"))

