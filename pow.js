// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

// The solution
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1; // Base case: x^0 = 1

  let result = 1;
  let absN = Math.abs(n);

  // Iterate through n times to multiply x
  for (let i = 0; i < absN; i++) {
    result *= x;
  }

  // Adjust result if n is negative
  if (n < 0) {
    result = 1 / result;
  }

  return result;
};
