// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;

  // Step 1: Find the length of the linked list
  let length = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }

  // Step 2: Calculate the effective rotation count
  const rotationCount = k % length;

  // Step 3: If no rotation required, return original list
  if (rotationCount === 0) return head;

  // Step 4: Find the new tail node and the new head node
  let newTail = head;
  for (let i = 1; i < length - rotationCount; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;

  // Step 5: Update pointers to rotate the list
  newTail.next = null;
  current.next = head;

  // Step 6: Return the new head of the rotated list
  return newHead;
};
