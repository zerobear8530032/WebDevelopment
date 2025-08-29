// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.




const products =[
  {"name": "tomatoes", "price": 10.5, "quantity": 12},
  {"name": "potatoes", "price": 8.0, "quantity": 20},
  {"name": "onions", "price": 12.3, "quantity": 15},
  {"name": "carrots", "price": 9.8, "quantity": 18},
  {"name": "apples", "price": 25.0, "quantity": 10},
  {"name": "bananas", "price": 15.75, "quantity": 14},
  {"name": "oranges", "price": 18.4, "quantity": 9},
  {"name": "spinach", "price": 7.5, "quantity": 25},
  {"name": "cucumbers", "price": 11.0, "quantity": 16},
  {"name": "bell peppers", "price": 20.2, "quantity": 8}
]

function calculateTotal(products){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let price= product["price"];
        let qty= product["quantity"];
        total+= price*qty;
    }
    return total;
}

console.log(calculateTotal(products));

