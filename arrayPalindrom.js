function isPalindromeArray(arr) {
  // Create a copy of the original array
  const copyArr = [...arr];

  // Reverse the copy array
  const reversedArr = copyArr.reverse();

  // Compare the original array with the reversed array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArr[i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const palindromeArray = [1, 2, 2, 1];
const nonPalindromeArray = [1, 2, 2, 3];

console.log(isPalindromeArray(palindromeArray)); // true
console.log(isPalindromeArray(nonPalindromeArray)); // false
