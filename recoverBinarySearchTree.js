// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:

// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:

// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

// Constraints:

// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let firstNode = null,
    secondNode = null,
    prevNode = new TreeNode(-Infinity);

  // In-order traversal helper function
  function inorder(node) {
    if (node === null) return;

    inorder(node.left);

    // Identify the two nodes that are out of order
    if (firstNode === null && prevNode.val >= node.val) {
      firstNode = prevNode;
    }
    if (firstNode !== null && prevNode.val >= node.val) {
      secondNode = node;
    }

    prevNode = node;

    inorder(node.right);
  }

  // Perform the in-order traversal to find the two nodes
  inorder(root);

  // Swap the values of the two nodes
  let temp = firstNode.val;
  firstNode.val = secondNode.val;
  secondNode.val = temp;
};

// Helper function to build a BST from an array (level-order)
function buildTreeFromArray(arr) {
  if (arr.length === 0) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  while (i < arr.length) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

// Helper function to convert BST to array (level-order)
function treeToArray(root) {
  if (root === null) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current !== null) {
      result.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}
