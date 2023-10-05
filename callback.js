const fs = require("fs");

// Asynchronous file read operation with a callback
// fs.readFile("./txt/output.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// console.log("Reading file...");

// Asynchronous file read operation with Promises
// fs.readFile("./txt/output.txt", "utf8")
//   .then((data) => {
//     console.log("File content:", data);
//   })
//   .catch((err) => {
//     console.error("Error reading file:", err);
//   });

// console.log("Reading file...");

async function readFileAsync() {
  try {
    const data = await fs.readFile("./Adress.txt", "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

console.log("Reading file...");
readFileAsync();
