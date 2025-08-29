import { log } from "console";
import fs from "fs/promises";

const str= fs.readFile("hello.txt");

str.then((data) => {
  console.log(data); // here, "data" is the resolved value (file content)
}).catch((err) => {
  console.error("Error:", err);
});




