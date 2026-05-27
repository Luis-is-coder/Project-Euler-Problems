// Problem 5: Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  //Create an array to store numbers from 1 to n
  let numbers = [];
  for ( let i = 1; i <= n; i++){
    numbers.push(i);
  }

  //if n is 1, LCM is 1
  if ( n === 1){
    return 1;
  }

  //Start with the first number
  let result = numbers[0];

  //Loop through the array to find the LCM of all numbers
  for ( let i = 1; i < numbers.length; i++){
    result = getLCM(result,numbers[i]);
  }

  return result;
}

//Helper function to find GCD using Euclidean Algorithm
function getGCD(a,b){
  while ( b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

//Helper function to find LCM of two numbers
function getLCM(a,b){
  return (a*b)/getGCD(a,b);
}

console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));

