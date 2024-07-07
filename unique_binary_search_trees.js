// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:

// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 19

// The solution
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // Initialize an array to store the number of unique BSTs for each number of nodes
  const dp = new Array(n + 1).fill(0);

  // Base cases
  dp[0] = 1; // There is one unique BST with 0 nodes (empty tree)
  dp[1] = 1; // There is one unique BST with 1 node

  // Fill the dp array using the recursive relation
  for (let nodes = 2; nodes <= n; nodes++) {
    for (let root = 1; root <= nodes; root++) {
      dp[nodes] += dp[root - 1] * dp[nodes - root];
    }
  }

  return dp[n];
};
