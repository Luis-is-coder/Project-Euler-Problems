// Problem 9: Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function findPythagoreanTriplet(n) {
    for (let a = 1; a < n / 3; a++) {
        for (let b = a + 1; b < (n - a) / 2; b++) {
            let c = n - a - b;
            if (c <= b) continue; // Ensure a < b < c
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return null; // No triplet found
}


console.log(findPythagoreanTriplet(24));
console.log(findPythagoreanTriplet(120));
console.log(findPythagoreanTriplet(1000));
