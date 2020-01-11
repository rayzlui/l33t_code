//From 1171 in LeetCode

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
function removeZeroSumSublists(head) {
  let sums = {};
  let current = head;
  let spot = 0;
  while (current) {
    sums[spot] = [0, current];
    for (let a in sums) {
      sums[a][0] += current.val;
      if (sums[a][0] === 0) {
        if (a / 1 === 0) {
          head = current.next;
        } else {
          if (sums[a - 1][1]) {
            sums[a - 1][1].next = current.next;
          }
        }
      }
    }
    spot++;
    current = current.next;
  }
  return head;
}
