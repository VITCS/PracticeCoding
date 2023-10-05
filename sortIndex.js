function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("mid:: ", mid, "target:: ", target);
    if (arr[mid] === target) {
      console.log("first if", arr[mid], target);
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      console.log("second if", arr[mid], target);
      left = mid + 1; // Target is in the right half
    } else {
      console.log("third if");
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found in the array
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 9;

const index = binarySearch(sortedArray, targetNumber);
if (index !== -1) {
  console.log(`Target number ${targetNumber} found at index ${index}.`);
} else {
  console.log(`Target number ${targetNumber} not found in the array.`);
}
