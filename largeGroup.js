function findLargestGroup(inputString) {
  if (!inputString) {
    return null;
  }

  let maxCount = 1;
  let currentCount = 1;
  //let maxChar = inputString[0];
  let startPosition = 0;

  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i - 1]) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = inputString[i - 1];
        startPosition = i - currentCount;
      }
      currentCount = 1;
    }
  }

  // Check one last time in case the largest group extends to the end of the string
  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = inputString[inputString.length - 1];
    startPosition = inputString.length - currentCount;
  }

  return [startPosition, maxCount];
}

// Example usage:
const inputStr = "aabbbcddddddd";
const result = findLargestGroup(inputStr);
console.log(result); // Output: [6, 7]
