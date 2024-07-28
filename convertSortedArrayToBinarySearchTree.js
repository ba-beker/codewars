// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

// Example 1:

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // Helper function to recursively build the BST
  const buildBST = (left, right) => {
    if (left > right) {
      return null;
    }
    // Choose the middle element to maintain balance
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    // Recursively build the left and right subtrees
    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);
    return node;
  };

  // Start the recursion with the entire range of the array
  return buildBST(0, nums.length - 1);
};
