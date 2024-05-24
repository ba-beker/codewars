// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// The solution
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Iterate from the end of the array (least significant digit)
  for (let i = digits.length - 1; i >= 0; i--) {
    // Add one to the current digit
    digits[i]++;

    // If the current digit is less than 10, we're done
    if (digits[i] < 10) {
      return digits;
    }

    // If the current digit is 10, set it to 0 and carry over to the next digit
    digits[i] = 0;
  }

  // If we have carried over through all digits, add a 1 at the beginning
  digits.unshift(1);
  return digits;
};
