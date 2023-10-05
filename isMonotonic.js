function isMonotonic(arr) {
  isIncreasing = true;
  isDecreasing = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDecreasing = false;
    } else if (arr[i] < arr[i - 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

const arr1 = [1, 2, 3, 45];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [1, 3, 4, 2, 5];
console.log(isMonotonic(arr1));
console.log(isMonotonic(arr2));
console.log(isMonotonic(arr3));
