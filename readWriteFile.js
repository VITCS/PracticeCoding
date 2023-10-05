const fs = require("fs");

// Blocking, synchronous
// const outputData = "Generated a file with new text";
// fs.writeFileSync("./txt/output.txt", outputData);

// const readFile = fs.readFileSync("./Adress.txt", "utf-8");

// console.log(readFile);

// Non-blocking and asynchroous

fs.readFile("./Adress.txt", "utf-8", (err, data) => {
  console.log(data);
});
