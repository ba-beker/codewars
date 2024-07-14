// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

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
var isSymmetric = function(root) {
    this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
}

var isSymmetric = function(root) {
// Helper function to check if two trees are mirror images
const isMirror = function(t1, t2) {
    // Both nodes are null, so they are mirrors
    if (t1 === null && t2 === null) return true;
    // One of the nodes is null, so they are not mirrors
    if (t1 === null || t2 === null) return false;
    // Check if the current nodes are equal and their children are mirrors
    return (t1.val === t2.val)
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right);
};

// Start the recursion with both subtrees of the root
return isMirror(root, root);
};