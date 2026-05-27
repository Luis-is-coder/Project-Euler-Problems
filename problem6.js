// Problem 6: Sum square difference

// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++){
    numbers.push(i);
  }

  let sumSquare = 0;
  for (let i = 0; i < numbers.length; i++){
    let num = 0;
    num = numbers[i] ** 2;
    sumSquare += num;
  }

  let total = 0;
  for (let i=0; i < numbers.length; i++){
    total += numbers[i];
  }

  let squareSum = total ** 2;
  let difference = squareSum - sumSquare;
  return difference;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));

