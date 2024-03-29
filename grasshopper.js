// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// The solution
var summation = function (num) {
    if (num <= 0) {
    return 0; // Return 0 for non-positive integers
  }

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}
