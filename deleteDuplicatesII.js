//From 82 in LeetCode

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
function deleteDuplicates(head) {
  if (head === null) {
    return null;
  }
  let seen = new Map();
  let current = head;
  let vals = [];
  while (current) {
    if (seen[current.val]) {
      seen[current.val]++;
    } else {
      seen[current.val] = 1;
    }
    vals.push(current.val);
    current = current.next;
  }
  let keys = vals.filter(x => seen[x] === 1);
  if (keys.length === 0) {
    return null;
  }
  let newHead = new ListNode(keys.shift());
  keys.reduce((acc, curr) => {
    acc.next = new ListNode(curr);
    return acc.next;
  }, newHead);
  return newHead;
}