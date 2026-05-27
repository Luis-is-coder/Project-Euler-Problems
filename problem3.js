// Problem 3: Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let factors = [];
  let num = number;

  while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }
  for ( let i=3; i <= Math.sqrt(num); i += 2){
    while ( num % i === 0){
      factors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
        factors.push(num);
    }

  let largestNum = factors[0];
  for ( let j = 1; j < factors.length; j++){
    if ( factors[j] > largestNum){
      largestNum = factors[j];
    }
  }
    
  return largestNum;
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));



