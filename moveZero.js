function moveZerosToEnd(arr) {
  let nonZeroCount = 0;

  // Count non-zero numbers and move them to the front of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroCount] = arr[i];
      nonZeroCount++;
    }
  }

  // Fill the remaining positions with zeros
  while (nonZeroCount < arr.length) {
    arr[nonZeroCount] = 0;
    nonZeroCount++;
  }

  return arr;
}

// Example usage
const inputArray = [0, 2, 0, 3, 4, 0, 5];
const resultArray = moveZerosToEnd(inputArray);
console.log(resultArray); // Output: [2, 3, 4, 5, 0, 0, 0]
