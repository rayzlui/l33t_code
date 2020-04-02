//From 19 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let current = head;
  let holder = {};
  let i = 1;
  while (current) {
    holder[i] = current;
    i++;
    current = current.next;
  }
  let length = Object.keys(holder).length;
  let previous = length - n;
  let post = length - n + 2;
  if (holder[previous] === undefined) {
    return holder[post] ? holder[post] : null;
  }
  holder[previous].next = holder[post];
  return head;
}
