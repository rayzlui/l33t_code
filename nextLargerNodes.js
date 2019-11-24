//From 1019 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function nextLargerNodes(head) {
  let current = head;
  let values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  let result = [];
  values.reverse();
  let seen = [];
  for (let i = 0; i < values.length; i++) {
    let current = values[i];
    let greaterThan = seen.find(x => x > current);
    if (greaterThan !== undefined) {
      result.unshift(greaterThan);
    } else {
      result.unshift(0);
    }
    seen.unshift(current);
  }
  return result;
}
