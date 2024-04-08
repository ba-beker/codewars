// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// Constraints:

// 1 <= n <= 9

// The solution
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const solutions = [];

  // Initialize the board with empty squares
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );

  // Backtracking function
  function backtrack(row) {
    if (row === n) {
      // All queens are placed, add current board configuration to solutions
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    // Iterate through each column in the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        // Place queen at this position
        board[row][col] = "Q";
        // Recur for the next row
        backtrack(row + 1);
        // Remove the queen from this position (backtrack)
        board[row][col] = ".";
      }
    }
  }

  // Function to check if it's safe to place a queen at the given position
  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  // Start backtracking from the first row
  backtrack(0);

  return solutions;
};
