const arr = [1, 1, 2, 3, 4, 4, 5];
function uniqueNumber(num) {
  return num.filter((acc, val) => num.indexOf(acc) === val);
}

const arr1 = [1, 1, 2, 3, 4, 4, 5];
function duplicateNumber(num) {
  return num.filter((acc, val) => num.indexOf(acc) !== val);
}

console.log(uniqueNumber(arr));
console.log(duplicateNumber(arr1));
