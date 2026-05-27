// Problem 4: Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function isPalindrome(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return str === reversed;
}


function largestPalindromeProduct(n) {
  let lpProduct = 0;
  let number = Math.pow(10,n) - 1;
  let smallestNum = Math.pow(10,(n-1));
  for ( let i = number; i >= smallestNum; i--){
    for ( let j = i; j >= smallestNum; j--){

      let product = i * j;

      if (product <= lpProduct) {
      break; // No need to continue if the product is already smaller than the largest palindrome found
      } 

      if (isPalindrome(String(product)) && lpProduct < product){
        lpProduct = product;
      }
    }
  }
  return lpProduct;
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));

