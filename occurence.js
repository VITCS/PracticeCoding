function countOccurrences(mainString, subString) {
  let count = 0;
  let position = mainString.indexOf(subString);

  while (position !== -1) {
    count++;
    position = mainString.indexOf(subString, position + 1);
  }

  return count;
}

const mainString = "Hello, hello, hello, world!";
const subString = "hello";

const occurrences = countOccurrences(mainString, subString);
console.log(`The substring "${subString}" occurs ${occurrences} times.`);
