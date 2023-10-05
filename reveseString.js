function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Reverse each word
  const reversedWords = words.map((word) => {
    // Use split, reverse, and join to reverse the characters in the word
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

const sentence = "Welcome to this Javascript Guide!";
const reversedSentence = reverseWords(sentence);

console.log(reversedSentence);
