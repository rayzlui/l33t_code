//From 143 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (head === null) {
    return null;
  }
  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  let newHead = nodes.shift();
  let front = nodes.splice(0, nodes.length / 2);
  nodes.reverse();
  let shorter = nodes.length > front.length ? front.length : nodes.length;
  for (let i = 0; i < shorter; i++) {
    newHead.next = nodes[i];
    newHead = newHead.next;
    newHead.next = front[i];
    newHead = newHead.next;
  }
  if (front.length !== nodes.length) {
    newHead.next = nodes[nodes.length - 1];
    newHead = newHead.next;
  }
  newHead.next = null;
  return newHead;
}
