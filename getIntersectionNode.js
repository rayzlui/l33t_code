//From 160 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let forA = [];
  let forB = [];
  while (currentA) {
    forA.unshift(currentA);
    currentA = currentA.next;
  }
  while (currentB) {
    forB.unshift(currentB);
    currentB = currentB.next;
  }
  let result = null;
  for (let i = 0; i < forA.length; i++) {
    if (forA[i] === forB[i]) {
      result = forA[i];
    } else {
      return result;
    }
  }
  return result;
}
