//From 234 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let string = [];
  let current = head;
  while (current) {
    string.push(current.val);
    current = current.next;
  }
  return string.join('') === string.reverse().join('');
}

//faster

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindromeII(head) {
  let string = [];
  let current = head;
  while (current) {
    string.push(current.val);
    current = current.next;
  }
  let reverse = string.slice().reverse();
  return string.every((x, index) => x === reverse[index]);
}
