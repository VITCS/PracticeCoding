const items = ["lokanath"];
const temp = {};
for (const [key, value] of items.entries()) {
  temp[key] = value;
}

console.log(temp);

// const str = "lokanath";
// const obj = {};

// for (const char of str) {
//   obj[char] = true;
// }

// console.log(obj);

const str1 = "lokanath";
const obj1 = {};

let index = 0;
for (const char of str1) {
  obj1[char] = index;
  index++;
}

console.log(obj1);
