// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function summitionpositive(nums){
    let sum =0;
    for(let x of nums){
        if(x<0){
            break;
        }
        sum+=x;
    }
    return sum;
}

const arr1= [2,45,34,2,-1,4];
console.log(summitionpositive(arr1))

const arr2= [];
console.log(summitionpositive(arr2))

const arr3= [4];
console.log(summitionpositive(arr3))

const arr4= [2,4,3,2,0,4];
console.log(summitionpositive(arr4))

const arr5= [-2,45,34,2,-1,34];
console.log(summitionpositive(arr5))