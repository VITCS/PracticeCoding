const arr = [1, 2, 3, 5];
function isLargeNum(arr) {
  let largest = arr[0];
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    sum += arr[i];
  }
  if (largest > sum - largest) {
    return `The largest number (${largest}) is greater than the sum of all other numbers (${sum}).`;
  } else {
    return `The largest number (${largest}) is not greater than the sum of all other numbers (${sum}).`;
  }
}
console.log(isLargeNum(arr));
