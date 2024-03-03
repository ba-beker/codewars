// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

// The solution
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Function to check if a given array contains duplicates
  const hasDuplicates = (arr) => {
    const seen = new Set();
    for (const num of arr) {
      if (num !== "." && seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  };

  // Check each row
  for (let i = 0; i < 9; i++) {
    if (hasDuplicates(board[i])) {
      return false;
    }
  }

  // Check each column
  for (let j = 0; j < 9; j++) {
    const column = [];
    for (let i = 0; i < 9; i++) {
      column.push(board[i][j]);
    }
    if (hasDuplicates(column)) {
      return false;
    }
  }

  // Check each 3x3 sub-box
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = [];
      for (let i = 3 * boxRow; i < 3 * boxRow + 3; i++) {
        for (let j = 3 * boxCol; j < 3 * boxCol + 3; j++) {
          box.push(board[i][j]);
        }
      }
      if (hasDuplicates(box)) {
        return false;
      }
    }
  }

  // If all checks pass, the board is valid
  return true;
};
