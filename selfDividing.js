function isSelfDividingNumber(num) {
  // Convert the number to a string to iterate through its digits
  const numStr = num.toString();

  // Iterate through each digit of the number
  for (let i = 0; i < numStr.length; i++) {
    // Convert the digit back to an integer
    const digit = parseInt(numStr.charAt(i));

    // Check if the digit is zero or if the number is not divisible by the digit
    if (digit === 0 || num % digit !== 0) {
      return false;
    }
  }

  // If we reach here, the number is self-dividing
  return true;
}

// Example usage:
console.log(isSelfDividingNumber(136)); // false (1, 0, and 1; 0 cannot be used for division)
console.log(isSelfDividingNumber(128)); // true (1, 2, and 8 divide 128 evenly)
console.log(isSelfDividingNumber(101)); // false (1, 0, and 1; 0 cannot be used for division)
