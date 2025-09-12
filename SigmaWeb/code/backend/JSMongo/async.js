async function asyncFunc() {
  console.log("Start asyncFunc");
  await new Promise(r => setTimeout(r, 2000)); // 2 sec delay
  console.log("End asyncFunc");
  return 42;
}

console.log("Before call");

asyncFunc().then(result => {
  console.log("Result:", result);
});

console.log("After call");
