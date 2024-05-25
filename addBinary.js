// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// The solution
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  // Traverse both strings from the end to the beginning
  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] - "0"; // Convert character to integer
      i--;
    }

    if (j >= 0) {
      sum += b[j] - "0"; // Convert character to integer
      j--;
    }

    // Determine the new bit to be added to the result and update the carry
    result = (sum % 2) + result; // Append current bit to result
    carry = Math.floor(sum / 2); // Update carry
  }

  // If there's any carry left, append it to the result
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};
