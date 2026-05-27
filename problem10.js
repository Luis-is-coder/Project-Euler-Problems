// Problem 10: Summation of primes


// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function primeSummation(n) {
  const sieve = new Array(n).fill(1);
  sieve[0] = 0;
  sieve[1] = 0;

  for (let i = 2; i * i < n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i) {
        sieve[j] = 0;
      }
    }
  }

  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (sieve[i]) sum += i;
  }

  return sum;
}


console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));