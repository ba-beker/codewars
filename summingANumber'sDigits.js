// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// The solution
function sumDigits(number) {
    // Step 1: Get the absolute value of the number
  number = Math.abs(number);

  // Step 2: Convert the number to a string
  const numStr = number.toString();

  // Step 3: Initialize a variable to store the sum of digits
  let sum = 0;

  // Iterate through each digit in the string and add it to the sum
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}
