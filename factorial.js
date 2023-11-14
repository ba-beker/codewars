// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

// The solution
function factorial(n) {
  // Check if n is a non-negative integer
  if (Number.isInteger(n) && n >= 0) {
    // Check if n is within the allowed range (0 to 12)
    if (n > 12) {
      // Throw a RangeError for values above 12
      throw new RangeError(
        "Input is too large. Please provide a number between 0 and 12."
      );
    } else {
      // Calculate the factorial
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  } else {
    // Throw a RangeError for values below 0
    throw new RangeError("Input must be a non-negative integer.");
  }
}
