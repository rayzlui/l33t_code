//From 24 in LeetCode

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
function swapPairs(head) {
  if (head === null) {
    return null;
  }
  let current = head.next;
  let flip = true;
  let attach = null;
  let newHead = null;
  let first = head;
  while (current) {
    if (flip) {
      let copyPrev = current;
      current = current.next;
      copyPrev.next = first;
      first.next = current;
      if (attach) {
        attach.next = copyPrev;
      }
      attach = first;

      if (!newHead) {
        newHead = copyPrev;
      }
    } else {
      first = current;
      current = current.next;
    }
    flip = !flip;
  }
  return newHead ? newHead : head;
}
