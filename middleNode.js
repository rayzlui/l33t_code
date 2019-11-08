//From 876 in LeetCode

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
function middleNode(head) {
  let holding = [];
  while (head) {
    holding.push(head);
    head = head.next;
  }
  return holding[Math.floor(holding.length / 2)];
};
