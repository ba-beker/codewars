// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */
const isBalanced = function (root) {
  // Helper function to get the height of a tree or detect imbalance.
  const checkHeight = (node) => {
    if (!node) return 0; // Base case: height of an empty tree is 0.

    // Recursively check the height of the left and right subtrees.
    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1; // Left subtree is unbalanced.

    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1; // Right subtree is unbalanced.

    // Check the difference in height.
    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Current tree is unbalanced.

    // Return the height of the current node.
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // Start the height check from the root.
  return checkHeight(root) !== -1;
};
