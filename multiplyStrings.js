// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

// The solution
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // Step 1: Parse input strings into arrays of digits
  const digits1 = num1.split("").map(Number);
  const digits2 = num2.split("").map(Number);

  // Initialize an array to store the product of digits
  const product = new Array(digits1.length + digits2.length).fill(0);

  // Step 2: Perform multiplication digit by digit
  for (let i = digits1.length - 1; i >= 0; i--) {
    for (let j = digits2.length - 1; j >= 0; j--) {
      const mul = digits1[i] * digits2[j];
      const sum = mul + product[i + j + 1]; // Include any carry from previous multiplications
      product[i + j + 1] = sum % 10; // Update the current digit
      product[i + j] += Math.floor(sum / 10); // Update the carry for the next digit
    }
  }

  // Step 4: Convert the result array to string
  const result = product.join("").replace(/^0+/, ""); // Remove leading zeros

  return result === "" ? "0" : result; // If result is empty, return '0'
};
