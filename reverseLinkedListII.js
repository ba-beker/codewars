// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Move `prev` to the node before `left`
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // `start` will point to the `left`-th node
  let start = prev.next;
  // `then` will point to the `left+1`-th node
  let then = start.next;

  // Reverse the sublist from `left` to `right`
  for (let i = 0; i < right - left; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }

  return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
