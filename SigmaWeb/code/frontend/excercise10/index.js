/* Create a business name generator by combining list of adjectives and shop name and another word
//using array not allowed 

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let adjectives = {
    0: "crazy",
    1: "amazing",
    2: "fire",
    3: "bold",
    4: "silent",
    5: "rapid",
    6: "shiny",
    7: "smart",
    8: "cool",
    9: "golden"
};

let names = {
    0: "engine",
    1: "foods",
    2: "garments",
    3: "tech",
    4: "designs",
    5: "wear",
    6: "solutions",
    7: "motors",
    8: "factory",
    9: "studio"
};


let words = {
    0: "bros",
    1: "limited",
    2: "hub",
    3: "crew",
    4: "nation",
    5: "point",
    6: "works",
    7: "lab",
    8: "zone",
    9: "cartel"
};


function getRandomElement(obj){
    let key= Object.keys(obj);
    let ran= Math.random;
    let idx=Math.floor(Math.random() * (key.length-1 - 0 + 1)) + 0;
    return obj[key[idx]];
}


let first = getRandomElement(adjectives);
let mid = getRandomElement(names);
let last = getRandomElement(words);

console.log(`${first} ${mid} ${last}`)




