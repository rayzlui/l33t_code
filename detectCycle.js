//From 142 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (head === null) {
    return null;
  }
  let seen = {};
  let current = head;
  let i = 0;
  while (current) {
    let keys = Object.keys(seen);
    let index = keys.findIndex(x => seen[x] === current);
    if (index !== -1) {
      return seen[index];
    }
    seen[i] = current;
    current = current.next;
    i++;
  }
  return null;
}