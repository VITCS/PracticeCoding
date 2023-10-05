function areAnagrams(firstWord, secondWord) {
  // Remove spaces and convert both words to lowercase
  const cleanFirstWord = firstWord.replace(/\s+/g, "").toLowerCase();
  const cleanSecondWord = secondWord.replace(/\s+/g, "").toLowerCase();

  // Check if the lengths of the cleaned words are different
  if (cleanFirstWord.length !== cleanSecondWord.length) {
    return false;
  }

  // Sort the characters in both words and compare them
  const sortedFirstWord = cleanFirstWord.split("").sort().join("");
  const sortedSecondWord = cleanSecondWord.split("").sort().join("");

  return sortedFirstWord === sortedSecondWord;
}

var firstWord = "Mary";
var secondWord = "Army";

if (areAnagrams(firstWord, secondWord)) {
  console.log("The words are anagrams.");
} else {
  console.log("The words are not anagrams.");
}
