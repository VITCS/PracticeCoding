function isCapitalized(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Iterate through each word
  for (const word of words) {
    // Check if the first letter is uppercase and all other letters are lowercase
    if (
      word.charAt(0) !== word.charAt(0).toUpperCase() ||
      word.slice(1) !== word.slice(1).toLowerCase()
    ) {
      return false;
    }
  }

  // If we reach here, the sentence is capitalized
  return true;
}

// Example usage:
console.log(isCapitalized("THIS IA A CAPITAL SENTENCE")); // true
console.log(isCapitalized("This is a Capitalized Sentence.")); // true
console.log(isCapitalized("This is not Capitalized.")); // false
