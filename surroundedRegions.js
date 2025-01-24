// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Explanation:

// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:

// Input: board = [["X"]]

// Output: [["X"]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

// The solution
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  // Helper function for Depth-First Search (DFS)
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== "O") return;

    // Mark the cell as visited by changing it to a temporary value, e.g., '#'
    board[i][j] = "#";

    // Visit all adjacent cells
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  // Step 1: Mark all 'O's connected to the borders
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === "O") dfs(i, 0);
    if (board[i][cols - 1] === "O") dfs(i, cols - 1);
  }
  for (let j = 0; j < cols; j++) {
    if (board[0][j] === "O") dfs(0, j);
    if (board[rows - 1][j] === "O") dfs(rows - 1, j);
  }

  // Step 2: Process the board to capture regions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") {
        // Capture surrounded regions
        board[i][j] = "X";
      } else if (board[i][j] === "#") {
        // Restore temporarily marked border-connected regions
        board[i][j] = "O";
      }
    }
  }
};
