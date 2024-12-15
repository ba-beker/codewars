// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104

// The solution
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  // Create a DP array with the last row of the triangle
  let dp = [...triangle[n - 1]];

  // Start from the second-to-last row and move upwards
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // Update dp[col] to the minimum path sum for the current cell
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }

  // The top element of dp contains the minimum path sum
  return dp[0];
};
