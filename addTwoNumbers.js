//From 2 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let result = null;
  let newList = null;
  let carry = 0;
  while (current1 || current2) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;
    let sum = val1 + val2 + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    let node = new ListNode(sum);
    if (newList) {
      newList.next = node;
      newList = newList.next;
    } else {
      result = node;
      newList = node;
    }
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }
  if (carry) {
    newList.next = new ListNode(carry);
  }
  return result;
}
