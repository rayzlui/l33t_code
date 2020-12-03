//From 1669 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeInBetween(list1, a, b, list2) {
  let currentOne = list1;
  let index = 0;
  let currentTwo = list2;
  while (index < a - 1) {
    currentOne = currentOne.next;
    index++;
    if (currentTwo.next) {
      currentTwo = currentTwo.next;
    }
  }
  let back = currentOne;
  while (index < b + 1) {
    back = back.next;
    index++;
    if (currentTwo.next) {
      currentTwo = currentTwo.next;
    }
  }
  while (currentTwo.next) {
    currentTwo = currentTwo.next;
  }
  currentOne.next = list2;
  currentTwo.next = back;
  return list1;
}
