//From 1721 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  let nodes = [];

  let current = head;
  while (current) {
    nodes.push(current);
    current = current.next;
  }

  [nodes[k - 1], nodes[nodes.length - k]] = [
    nodes[nodes.length - k],
    nodes[k - 1],
  ];

  nodes.push(null);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}
