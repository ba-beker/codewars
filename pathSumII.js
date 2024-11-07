// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// The solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];

// Helper function to perform DFS traversal
function dfs(node, currentSum, path) {
    if (!node) return; // If node is null, return immediately
    
    // Add current node's value to the path and update the current sum
    path.push(node.val);
    currentSum += node.val;
    
    // Check if it's a leaf node and the sum equals targetSum
    if (!node.left && !node.right && currentSum === targetSum) {
        // Add a copy of the path to the result
        result.push([...path]);
    } else {
        // Recurse on left and right children
        dfs(node.left, currentSum, path);
        dfs(node.right, currentSum, path);
    }
    
    // Backtrack: remove the current node from the path
    path.pop();
}

// Initialize DFS with the root node, starting sum of 0, and an empty path
dfs(root, 0, []);

return result;
};