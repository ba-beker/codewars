// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  // Initialize queue for BFS with root node and depth = 1
  const queue = [[root, 1]];

  while (queue.length > 0) {
    const [node, depth] = queue.shift();

    // Check if it's a leaf node
    if (node.left === null && node.right === null) {
      return depth;
    }

    // Add left child to the queue if it exists
    if (node.left !== null) {
      queue.push([node.left, depth + 1]);
    }

    // Add right child to the queue if it exists
    if (node.right !== null) {
      queue.push([node.right, depth + 1]);
    }
  }
};
