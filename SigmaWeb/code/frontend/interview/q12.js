// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token , expireinmilisec){
    localStorage.setItem("userAuth",token);
    const messagediv = document.querySelector(".message");
    messagediv.innerHTML= "Your Auth Token set to local Storage  it will expire in :"+ expireinmilisec+"  milisec";
    setTimeout(() => {
        localStorage.removeItem("userAuth");
        messagediv.innerHTML= "Your Auth Token Expired ";
    }, expireinmilisec);
}

const authToken = prompt("Enter Your Auth Token :");
let delay= Math.floor(Math.random()*10000);
setAuthToken(authToken,delay);



