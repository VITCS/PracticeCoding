function factorial(number) {
  let result = 1;

  //   for (let i = 2; i <= number; i += 1) {
  //     result *= i;
  //   }
  for (number; number >= 1; number--) {
    result = result * number;
  }

  return result;
}

//------------
// Recursive way
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

console.log(factorial(6));

//console.log(factorialRecursive(7));
