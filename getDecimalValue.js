//From 1290 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  let current = head;
  let string = '';
  while (current) {
    string += current.val;
    current = current.next;
  }
  return parseFloat(parseInt(string, 2));
}
