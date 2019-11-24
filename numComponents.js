//From 817 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
function numComponents(head, G) {
  let objectify = G.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  let current = head;
  let result = 0;
  let link = null;
  let connected = false;
  while (current) {
    let val = current.val;
    if (objectify[val]) {
      if (link !== null) {
        objectify[val] = false;
        objectify[link] = false;
        connected = true;
      }
      link = current.val;
    } else {
      link = null;
      if (connected) {
        result++;
        connected = false;
      }
    }
    current = current.next;
  }
  if (connected) {
    result++;
  }
  let remainders = G.filter(x => objectify[x]);
  return result + remainders.length;
}
