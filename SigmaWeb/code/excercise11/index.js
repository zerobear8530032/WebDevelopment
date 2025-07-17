// find factorial of a number using reduce and loop

let x = 5;

function factorialLoop(num){
    if(num<0){
        return -1;
    }
    if(num<=2){
        return num;
    }
    let prod=1;
    for(let i =2;i<=num;i++){
        prod=prod*i;
    }
    return prod;
}
function factorialReduce(num){
    if(num<0){
        return -1;
    }
    if(num<=2){
        return num;
    }
    // Array(num): create an array of length num
    // with keys(): we can get the indexs of the array 
    // with arr[0]=1 we convert the array key starting from 0 to num
    // because it keys are 0- num-1 
    // so we can remove 0 and put num in place of that  
    // array.from takea number of arguement to create a array out of them
    let arr= Array.from(Array(num).keys());
    arr[0]=num;

    // console.log(arr);
    // this will auto return 
    return arr.reduce((e1,e2)=> e1*e2)
}

console.log(factorialLoop(x));
console.log(factorialReduce(x));

