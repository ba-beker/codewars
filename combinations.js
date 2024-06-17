// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

// The solution
const result = [];

function backtrack(start, currentCombination) {
  // If the current combination is of the desired length, add it to the results
  if (currentCombination.length === k) {
    result.push([...currentCombination]);
    return;
  }

  // Iterate through the range, starting from the current starting point
  for (let i = start; i <= n; i++) {
    // Add the current number to the combination
    currentCombination.push(i);
    // Recursively build the combination with the next numbers
    backtrack(i + 1, currentCombination);
    // Remove the last number to backtrack and try the next number
    currentCombination.pop();
  }
}

// Start the backtracking with an empty combination and starting point 1
backtrack(1, []);

return result;
