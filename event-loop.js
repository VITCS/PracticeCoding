const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// Before event-loop we have not defined with callback and there is no particular order to execute all this code
console.log("first");
setTimeout(() => {
  console.log("Timer 1 finished "), 0;
});

setImmediate(() => {
  console.log("Set immediate");
});

fs.readFile("./Adress.txt", () => {
  console.log("I/O finished");
});

console.log("Top level code executed");
// after even-loop implementation
// return new Promise((resolve, reject) => {});
fs.readFile("./Adress.txt", () => {
  console.log("I/O finished");
  setTimeout(() => {
    console.log("Timer 2 finished "), 2000;
  });
  setTimeout(() => {
    console.log("Timer 3 finished "), 5000;
  });
  setImmediate(() => {
    console.log("Set immediate");
  });

  process.nextTick(() => {
    console.log("Process next tick ");
  });
});
