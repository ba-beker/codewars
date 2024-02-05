// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

// The solution
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  // Helper function to generate combinations recursively
  function generate(current, open, close) {
    // Base case: if the current combination is complete
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // If there are still open parentheses available, add one
    if (open < n) {
      generate(current + "(", open + 1, close);
    }

    // If adding a closing parenthesis is valid, add one
    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  // Start the recursion with an empty combination and 0 open and close parentheses
  generate("", 0, 0);

  return result;
};
