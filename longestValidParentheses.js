// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
// substring
// .

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

// The solution
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1]; // Initialize stack with -1 to represent the base
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop(); // Pop the last element (matching opening parenthesis)
      if (stack.length === 0) {
        stack.push(i); // If stack becomes empty, push the current index as the new base
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
};
