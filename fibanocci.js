function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return fibonacciSequence;
}

const n = 10; // Change this to the desired number of Fibonacci numbers
const fibonacciNumbers = generateFibonacci(n);

console.log(fibonacciNumbers);
