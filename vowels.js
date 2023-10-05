function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Initialize a variable to store the count of vowels
  let vowelCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is a vowel (a, e, i, o, u)
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

function countVowelsMatch(str) {
  // Use a regular expression to find all vowels (case-insensitive)
  const vowels = str.match(/[aeiou]/gi);

  // Check if vowels were found and return the count, or return 0 if no vowels were found
  return vowels ? vowels.length : 0;
}

// Example usage:
const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);
const numberOfVowelsMatch = countVowelsMatch(inputString);
console.log(`Number of vowels: ${numberOfVowels}, ${numberOfVowelsMatch}`);
