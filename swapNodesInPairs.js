// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// The solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // Create a dummy node to simplify edge cases
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  // Iterate through the list and swap adjacent nodes
  while (current.next !== null && current.next.next !== null) {
    let firstNode = current.next;
    let secondNode = current.next.next;

    // Swap nodes
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    current.next = secondNode;

    // Move to the next pair
    current = current.next.next;
  }

  return dummy.next;
};
