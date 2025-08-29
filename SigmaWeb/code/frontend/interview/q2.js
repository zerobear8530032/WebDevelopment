// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleElements(nums){
    if(nums.length==0){
        return [];
    }
    if(nums.length==1){
        return [nums[0],nums[0]];
    }
    const res= [];
    let i =0;
    let allrepeat=true;
    while(i<nums.length-1){
        if(nums[i]==nums[i+1]){
            while(i<nums.length-1 && nums[i]==nums[i+1]){
                i++;
                res.push(nums[i]);
            }
            continue;
        }else{
            res.push(nums[i]);
            res.push(nums[i]);
            allrepeat=false;
        }
        i++;
    }
    if(allrepeat){
        res.push(nums[0]);
    }
    if(nums[nums.length-1]==nums[nums.length-2]){
        res.push(nums[nums.length-1]);
    }else{
        res.push(nums[nums.length-1]);
        res.push(nums[nums.length-1]);
    }
    return res;
}

const nums1= [1,3,5,3,6,7,8,9]
console.log(doubleElements(nums1));

const nums2= [1,3,3,3,6,7,8,9]
console.log(doubleElements(nums2));

const nums3= [1,3,2,3,3,7,8,9]
console.log(doubleElements(nums3));

const nums4= []
console.log(doubleElements(nums4));

const nums5= [1,1,1]
console.log(doubleElements(nums5));

const nums6= [1]
console.log(doubleElements(nums6));