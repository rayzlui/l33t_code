//From 148 in LeetCode

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
function sortList(head) {
  let current = head;
  let values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  values.sort((x, y) => x - y);
  let redo = head;
  for (let i = 0; i < values.length; i++) {
    redo.val = values[i];
    redo = redo.next;
  }
  return head;
}
