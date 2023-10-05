function isPrime(num) {
  //   if (num <= 1) {
  //     return false;
  //   }
  //   if (num <= 3) {
  //     return true;
  //   }

  //   if (num % 2 === 0 || num % 3 === 0) {
  //     return false;
  //   }

  //   for (let i = 5; i * i <= num; i += 6) {
  //     if (num % i === 0 || num % (i + 2) === 0) {
  //       return false;
  //     }
  //   }

  //return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    } else {
      return "Prime";
    }
  }
}
// Example usage:
console.log(isPrime(11)); // true
console.log(isPrime(20)); // false
//------

function generatePrimesInRange(start, end) {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

// Example usage:
const primeList = generatePrimesInRange(1, 50);
console.log(primeList); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
