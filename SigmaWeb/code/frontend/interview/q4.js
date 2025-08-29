
// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function passwordValidator(password){
    let haveupperchar =false;
    let havelowerchar =false;
    let haveanumber = false;
    if(password.length>=8){
        for(let i =0;i<password.length;i++){
            let char = password[i];
            if(char>="a" && char<="z"){
                havelowerchar=true;
            }
            if(char>="A" && char<="Z"){
                haveupperchar=true;
            }
            if(char>="0" && char<="9"){
                haveanumber=true;
            }
        }
    }else{
        return false;
    }
    return haveanumber && havelowerchar && haveupperchar;
}


let pass1= "zerobear";
console.log(passwordValidator(pass1));
let pass2= "zerobear@124";
console.log(passwordValidator(pass2));
let pass3= "zerobearA123";
console.log(passwordValidator(pass3));
let pass4= "Zer1234";
console.log(passwordValidator(pass4));
let pass5= "zete@143";
console.log(passwordValidator(pass5));
