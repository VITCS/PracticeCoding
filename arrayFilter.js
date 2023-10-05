// const arr = [1, 2, 3, 4];

// const isEven = (num) => num % 2 === 0;

// const checkEvenNumbers = arr.filter(isEven);

// const checkEvenNumbers = arr.filter((num) => num % 2 === 0);

// console.log(checkEvenNumbers);
// ------------

let strArray = ["q", "w", "w", "w", "e", "i", "i", "u", "r"];
let temp = [1, 1, 2, 2];
let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(findDuplicates(strArray)); // All duplicates
console.log([...new Set(findDuplicates(strArray))]); // Unique duplicates

let tempDuplicate = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(tempDuplicate(temp));
console.log([...new Set(tempDuplicate(temp))]); // Unique duplicates

// const [state, setState] = useState()

// useEffect(()=>{

//     return (()=>{

//     })
// }, [])
function findMissingElements(arr) {
  const completeSet = [1, 2, 3, 4, 5, 6];
  const missingElements = [];

  for (let i = 0; i < completeSet.length; i++) {
    const element = completeSet[i];
    if (!arr.includes(element)) {
      missingElements.push(element);
    }
  }

  return missingElements;
}

const myArray = [1, 2, 4, 6];
const missing = findMissingElements(myArray);
console.log("Missing elements:", missing); // Output: Missing elements: [3, 5]
//--------------------------

function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];

  for (const item of arr) {
    if (seen[item]) {
      duplicates.push(item);
    } else {
      seen[item] = true;
    }
  }

  return duplicates;
}

const myArray = [1, 2, 3, 2, 4, 5, 3];
const duplicates = findDuplicates(myArray);
console.log("Duplicates:", duplicates); // Output: Duplicates: [2, 3]
