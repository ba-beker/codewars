// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// The solution
function incrementString(input) {
  // Regular expression to match the ending number (if any)
  const regex = /(\d+)$/;

  // Use regex to split the input string into two parts: the string part and the number part
  const match = input.match(regex);

  if (match) {
    const stringPart = input.slice(0, match.index);
    const numberPart = String(Number(match[0]) + 1);
    const leadingZeros = Math.max(match[0].length - numberPart.length, 0); // Ensure non-negative count
    const incrementedNumber = "0".repeat(leadingZeros) + numberPart;
    return stringPart + incrementedNumber;
  } else {
    // If no number is found at the end, simply append "1"
    return input + "1";
  }
}
