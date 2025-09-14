
use("CrudDB"); //create database 
// db.createCollection("courses");// create a collection (table)
// db.courses.insertOne({
//     name:"Web Dev for Beginners" , 
//     price: 0 ,
//     duration : 24,
//     ctu :"hrs",
//     assignments:20,
//     projects:2
// })// insert a single element


// use("CrudDB");

// db.courses.insertMany([
//   {
//     name: "Python for Data Science",
//     price: 49.99,
//     duration: 50,
//     ctu: "hrs",
//     assignments: 10,
//     projects: 3,
//   },
//   {
//     name: "Frontend Web Development Bootcamp",
//     price: 99.0,
//     duration: 120,
//     ctu: "hrs",
//     assignments: 40,
//     projects: 5,
//   },
//   {
//     name: "Introduction to Machine Learning",
//     price: 129.99,
//     duration: 75,
//     ctu: "hrs",
//     assignments: 15,
//     projects: 2,
//   },
//   {
//     name: "JavaScript Algorithms and Data Structures",
//     price: 0,
//     duration: 30,
//     ctu: "hrs",
//     assignments: 50,
//     projects: 1,
//   },
//   {
//     name: "Complete SQL Database Masterclass",
//     price: 35.0,
//     duration: 40,
//     ctu: "hrs",
//     assignments: 12,
//     projects: 3,
//   },
//   {
//     name: "React.js: The Complete Guide",
//     price: 89.99,
//     duration: 60,
//     ctu: "hrs",
//     assignments: 15,
//     projects: 4,
//   },
//   {
//     name: "Node.js and Express.js for Backend",
//     price: 79.99,
//     duration: 55,
//     ctu: "hrs",
//     assignments: 18,
//     projects: 3,
//   },
//   {
//     name: "Cybersecurity for Beginners",
//     price: 59.99,
//     duration: 45,
//     ctu: "hrs",
//     assignments: 10,
//     projects: 2,
//   },
//   {
//     name: "UI/UX Design Fundamentals",
//     price: 0,
//     duration: 20,
//     ctu: "hrs",
//     assignments: 8,
//     projects: 2,
//   },
//   {
//     name: "Cloud Computing with AWS",
//     price: 149.0,
//     duration: 90,
//     ctu: "hrs",
//     assignments: 25,
//     projects: 4,
//   },
//   {
//     name: "Data Structures in Java",
//     price: 65.0,
//     duration: 70,
//     ctu: "hrs",
//     assignments: 20,
//     projects: 3,
//   },
//   {
//     name: "Mobile App Development with Flutter",
//     price: 110.0,
//     duration: 80,
//     ctu: "hrs",
//     assignments: 15,
//     projects: 4,
//   },
//   {
//     name: "Ethical Hacking: A Practical Approach",
//     price: 139.99,
//     duration: 100,
//     ctu: "hrs",
//     assignments: 30,
//     projects: 5,
//   },
//   {
//     name: "Game Development with Unity",
//     price: 95.0,
//     duration: 70,
//     ctu: "hrs",
//     assignments: 10,
//     projects: 3,
//   },
//   {
//     name: "Professional Graphic Design",
//     price: 60.0,
//     duration: 50,
//     ctu: "hrs",
//     assignments: 12,
//     projects: 5,
//   },
// ]);// this is used to insert more then one document at a time
// the data will get a mongo object of cursor (its a link to the actual data )
// that we can use in js 
// let data=db.courses.find({price:0 })
// console.log(data.toArray());

// update the operations
// this take first the filter then the set will take what to update
// db.courses.updateMany({price:0},{$set:{price:100}})

//Delete a Single Document which matches the filter; 
// db.courses.deleteOne({price:149});
// delete all document which matched the filter
// db.courses.deleteMany({price:149});
db.courses.find();
