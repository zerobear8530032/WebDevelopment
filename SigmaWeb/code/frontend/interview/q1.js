// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function MagicalSortingHat(names){
    const res= [];
    for (const name of names) {
        if(name.length<6){
            res.push("Gryffindor");
        }else if(name.length<8){
            res.push("Hufflepuff");
        }else if(name.length<12){
            res.push("Ravenclaw");
        }else{
            res.push("Slytherin");
        }
    }
    return res;
}

const arr1=["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "Jack", "Sophia", "Liam","Olivia", "Noah", "Ava", "William", "Mia", "James", "Charlotte", "Benjamin"]; 
console.log(MagicalSortingHat(arr1));












