// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

// Constraints:

// -231 <= dividend, divisor <= 231 - 1
// divisor != 0

// The solution
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // Check for special cases
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) {
    // Handle overflow case for -2^31
    if (dividend === -Math.pow(2, 31)) return Math.pow(2, 31) - 1;
    return -dividend;
  }

  // Determine the sign of the result
  const isNegative = dividend < 0 !== divisor < 0;

  // Take the absolute values of dividend and divisor
  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);

  // Initialize quotient
  let quotient = 0;

  // Perform the division
  while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    quotient++;
  }

  // Apply the sign to the result
  return isNegative ? -quotient : quotient;
};
