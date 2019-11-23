//From 141 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (head === null) {
    return false;
  }
  let holder = [];
  let current = head;
  while (current.next) {
    if (holder.includes(current)) {
      return true;
    }
    holder.push(current);
    current = current.next;
  }
  return false;
}
