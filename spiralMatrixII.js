// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

// Constraints:

// 1 <= n <= 20

// The solution
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // Create an empty matrix filled with zeros
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (num <= n * n) {
    // Fill the top row from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++; // Move to the next row

    // Fill the rightmost column from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--; // Move to the previous column

    // Fill the bottom row from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--; // Move to the previous row

    // Fill the leftmost column from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++; // Move to the next column
  }

  return matrix;
};
