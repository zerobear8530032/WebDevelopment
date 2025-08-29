// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str){
    let count =0;
    let lowerstr= str.toLowerCase();
    for(let char of lowerstr){

        if(char=='a' || char=='e' || char =='i' || char =='o' || char =='u'){
            count+=1;
        }        
    }
    return count;
}

const s1= "good";
console.log(countVowels(s1));

const s2= "aBcDEFgi";
console.log(countVowels(s2));

const s3= "wakeup";
console.log(countVowels(s3));

const s4= "morning";
console.log(countVowels(s4));

