// const arr = [1, 2, 4, 5];
// const result = arr.reduce((acc, num) => {
//   return (acc = acc + num);
// }, 0);

// console.log(result);

const friendName = [
  "RupaKhan",
  "Sunny",
  "Rohul444fsfss",
  "Mistry",
  "Zumman",
  "Asif",
  "Liza",
  "Fulo",
];

const temp = friendName.reduce((max, i) => {
  return i.length > max.length ? i : max;
}, friendName[0]);
// function mega(arr) {
//   return arr.reduce((max, name) => {
//     return name.length > max.length ? name : max;
//   }, arr[0]);
// }

console.log(temp);
