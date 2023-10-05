function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const arrayToSort = [23, 4, -1, 42, 3, 23, 0];
const sortedArray = bubbleSort(arrayToSort);

console.log(sortedArray); // Output: [-1, 0, 3, 4, 23, 23, 42]
