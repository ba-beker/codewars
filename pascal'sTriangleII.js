// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33

// The solution
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // Initialize the row with 1, as the first element is always 1.
let row = [1];

// Build the row iteratively.
for (let i = 1; i <= rowIndex; i++) {
    // Insert 1 at the end for the new row.
    row.push(1);

    // Update the row from the back to avoid overwriting values we still need.
    for (let j = i - 1; j > 0; j--) {
        row[j] += row[j - 1];
    }
}

return row;
};