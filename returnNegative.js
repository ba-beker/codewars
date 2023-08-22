// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// The solution
function makeNegative(num) {
    // Check if the input number is greater than 0
    if (num > 0) {
      // If it is greater than 0, return its negative value
      return -num;
    } else {
      // If it's less than or equal to 0, return it as is
      return num;
    }
  }