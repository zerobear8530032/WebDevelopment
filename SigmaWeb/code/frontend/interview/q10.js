// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(type){
    const steps = ["Boiling Water","Grinding Beans","Adding Filter","pouring Your coffee"," Your Coffee is Ready..."];
    for(const step of steps){
        const delay = Math.random()*10000;
        console.log(step);
        console.log(`Will take this much Mili seconds ${delay}`);
        await randomDelay(delay);
    }
    return new Promise((resolve,reject)=>{
            resolve();
    })
}

async  function randomDelay(delay){
     return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}


const type = "Roasted Beans"
brewCoffee(type).then(message=>{console.log("Your coffe brew successfully")}).catch(message=>{console.log("your coffee did not brew")})