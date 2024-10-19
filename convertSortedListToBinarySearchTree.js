// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

 

// Example 1:


// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

// The solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // Helper function to convert linked list to array
 const toArray = (head) => {
     const arr = [];
     let current = head;
     while (current) {
         arr.push(current.val);
         current = current.next;
     }
     return arr;
 };
 
 // Helper function to build the BST
 const buildBST = (nums, start, end) => {
     if (start > end) {
         return null;
     }
     const mid = Math.floor((start + end) / 2);
     const node = new TreeNode(nums[mid]);
     node.left = buildBST(nums, start, mid - 1);
     node.right = buildBST(nums, mid + 1, end);
     return node;
 };

 // Step 1: Convert the linked list to an array
 const nums = toArray(head);
 
 // Step 2: Build the BST from the array
 return buildBST(nums, 0, nums.length - 1);
};