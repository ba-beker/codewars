// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

// The solution
function getChar(number) {
  if (number >= 0 && number <= 127) {
    return String.fromCharCode(number);
  } else {
    return "Invalid input: Number should be in the range 0 to 127 (ASCII range).";
  }
}
