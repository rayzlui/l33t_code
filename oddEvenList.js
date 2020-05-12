//From 328 in LeetCode

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
function oddEvenList(head) {
  if (head === null) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;
  let count = 1;
  if (even === null) {
    return head;
  }
  let current = even.next;
  while (current) {
    if (count % 2 === 0) {
      even.next = current;
      even = even.next;
    } else {
      odd.next = current;
      odd = odd.next;
    }
    count++;
    current = current.next;
  }
  even.next = null;
  odd.next = evenHead;
  return head;
}
