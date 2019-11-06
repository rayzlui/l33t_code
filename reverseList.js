//From 206 in LeetCode

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

function reverseList(head) {
  if (!head) {
    return head;
  }
  let nums = [];
  let copy = head;
  while (copy.next) {
    nums.push(copy.val);
    copy = copy.next;
  }
  nums.push(copy.val);
  copy = head;
  for (let i = nums.length - 1; i >= 0; i--) {
    copy.val = nums[i];
    copy = copy.next;
  }
  return head;
}
