const products = ["Drinks", "Groceries", "medicines", "sport", "tools"];

function placeOrder(products, product) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000; // random delay up to 1 second
        setTimeout(() => {
            for(const prod of products){
                if(product.toLowerCase() === prod.toLowerCase()){
                    resolve();
                }
            }
            reject();
        }, delay);
    });
}

// prompt user for product (browser only)
const prod = prompt("Enter your product name: " + products.join(", "));

placeOrder(products, prod)
    .then(message => {
        confirm("Please Confirm Order of "+prod); // ask user to confirm
    })
    .catch(error => {
        alert("Sorry Product not Available "); // show error
    });

    
