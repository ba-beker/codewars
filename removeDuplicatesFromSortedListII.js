// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
var deleteDuplicates = function (head) {
  // Edge case: if the list is empty or has only one node, return it as is
  if (!head || !head.next) {
    return head;
  }

  // Create a dummy node to handle edge cases easily
  let dummy = new ListNode(0, head);
  let prev = dummy; // prev is the last node before the sublist of duplicates
  let current = head; // current is used to traverse the list

  while (current) {
    // Move current to the end of the duplicates sublist
    while (current.next && current.val === current.next.val) {
      current = current.next;
    }

    // If prev.next is still pointing to the same node as current,
    // it means there were no duplicates for the current node
    if (prev.next === current) {
      prev = prev.next;
    } else {
      // Skip all duplicates
      prev.next = current.next;
    }

    // Move current forward
    current = current.next;
  }

  return dummy.next;
};
