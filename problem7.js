// Problem 7: 10001st prime

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
  if (n < 1) return null; // Invalid input

  // Estimate upper bound for the n-th prime
  let upperBound;
  if (n === 1) upperBound = 2;
  else if (n === 2) upperBound = 3;
  else upperBound = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));

  // Initialize sieve array: true means "potentially prime"
  let sieve = new Array(upperBound + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime

  // Sieve of Eratosthenes
  for (let i = 2; i <= Math.sqrt(upperBound); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= upperBound; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Collect primes
  let primeList = [];
  for (let i = 2; i <= upperBound; i++) {
    if (sieve[i]) primeList.push(i);
  }

  // Return the n-th prime (1-based index)
  if (primeList.length >= n) {
    return primeList[n - 1];
  }
  return null; // Not enough primes found
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));