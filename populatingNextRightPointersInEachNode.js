// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000

// The solution
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return null;

  // Start with the root node in the queue
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    // Iterate through the nodes in the current level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // Connect the current node to the next node in the queue, if it exists
      if (i < levelSize - 1) {
        node.next = queue[0];
      }

      // Add the children of the current node to the queue for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};


let username = '';
username ||= 'Guest'; // Sets 'Guest' because username is ''