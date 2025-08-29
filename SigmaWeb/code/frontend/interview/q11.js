// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const objects = [{"name":"potato","category":"vegetable"},
{"name":"apple","category":"fruit"},
{"name":"carrot","category":"vegetable"},
{"name":"banana","category":"fruit"},
{"name":"salmon","category":"fish"},
{"name":"chicken","category":"meat"},
{"name":"broccoli","category":"vegetable"},
{"name":"mango","category":"fruit"},
{"name":"beef","category":"meat"},
{"name":"spinach","category":"vegetable"}]

function filterByCategory(objects, category){
    const res= objects.filter((obj)=>{return obj["category"].toLowerCase() === category.toLowerCase()});
    return res;
}

console.log(filterByCategory(objects,"vegetable"));