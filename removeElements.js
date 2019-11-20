//From 203 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  let current = head;
  while (current) {
    if (current.val === val) {
      head = current.next;
      current = head;
    } else {
      if (current.next === null) {
        return head;
      }
      while (current.next.val === val) {
        current.next = current.next.next;
        if (current.next === null) {
          return head;
        }
      }
      current = current.next;
    }
  }
  return head;
}
