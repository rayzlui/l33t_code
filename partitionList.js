//From 86 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  if (head === null) {
    return null;
  }
  let current = head;
  let array = [];
  while (current) {
    array.push(current);
    current = current.next;
  }
  let lower = [];
  let higher = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].val >= x) {
      higher.push(array[i]);
    } else {
      lower.push(array[i]);
    }
  }

  if (lower.length === 0 || higher.length === 0) {
    return head;
  }
  let lowerList = lower.reduce((acc, curr) => {
    if (acc === undefined) {
      acc = curr;
    } else {
      acc.next = curr;
    }
    return acc.next;
  });
  let higherList = higher.reduce((acc, curr) => {
    if (acc === undefined) {
      acc = curr;
    } else {
      acc.next = curr;
    }
    return acc.next;
  });
  higherList.next = null;
  lowerList.next = higher[0];
  return lower[0];
}