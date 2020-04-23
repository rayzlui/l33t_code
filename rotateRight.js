//From 61 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  if (head === null) {
    return null;
  }
  if (k === 0) {
    return head;
  }
  let values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  k = values.length - (k % values.length);
  let shift = values.splice(0, k);
  values = values.concat(shift);
  let newHead = new ListNode(values.shift());
  values.reduce((acc, curr) => {
    if (acc) {
      acc.next = new ListNode(curr);
      acc = acc.next;
    } else {
      acc = new ListNode(curr);
    }
    return acc;
  }, newHead);
  return newHead;
}