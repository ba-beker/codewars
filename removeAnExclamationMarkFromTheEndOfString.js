// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// The solution
function remove(s) {
  // Check if the string ends with an exclamation mark
  if (s.endsWith("!")) {
    // Remove the last character (exclamation mark)
    return s.slice(0, -1);
  } else {
    // If no exclamation mark at the end, return the original string
    return s;
  }
}
