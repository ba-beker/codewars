// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

 

// Example 1:


// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 9

// The solution
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;

// Create an empty chessboard of size n x n
const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

// Helper function to check if the current queen position is safe
const isSafe = (row, col) => {
    // Check if there's a queen in the same column
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }

    // Check upper left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }

    // Check upper right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }

    return true;
};

// Backtracking function to find solutions recursively
const backtrack = (row) => {
    // If all queens are placed, increment count
    if (row === n) {
        count++;
        return;
    }

    // Iterate through each column in the current row
    for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
            // Place queen in the current position
            board[row][col] = 'Q';
            // Move on to the next row
            backtrack(row + 1);
            // Backtrack: remove the queen from the current position
            board[row][col] = '.';
        }
    }
};

// Start backtracking from the first row
backtrack(0);

return count;
};