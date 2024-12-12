// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

// The solution
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // Initialize an empty array to store the rows of Pascal's triangle
  const triangle = [];

  // Generate each row
  for (let i = 0; i < numRows; i++) {
    // Create a new row with 1 at both ends
    const row = new Array(i + 1).fill(1);

    // Fill in the values between the 1s based on the previous row
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    // Add the row to the triangle
    triangle.push(row);
  }

  return triangle;
};
