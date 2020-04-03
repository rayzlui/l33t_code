//From 25 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  if (head === null) {
    return null;
  }
  let current = head;
  let attach = null;
  let newHead = null;
  let kDo = [];
  while (current) {
    if (kDo.length === k) {
      kDo = kDo.reverse();
      let newSection = kDo.reduce((acc, curr) => {
        if (acc) {
          acc.next = curr;
        } else {
          acc = curr;
        }
        return acc.next;
      });
      if (attach) {
        attach.next = kDo[0];
      } else {
        newHead = kDo[0];
      }
      attach = kDo.pop();
      kDo = [];
    } else {
      kDo.push(current);
      current = current.next;
    }
  }
  if (kDo.length === k) {
    kDo = kDo.reverse();
    let newSection = kDo.reduce((acc, curr) => {
      if (acc) {
        acc.next = curr;
      } else {
        acc = curr;
      }
      return acc.next;
    });
    if (attach) {
      attach.next = kDo[0];
    } else {
      newHead = kDo[0];
    }
    attach = kDo.pop();
    kDo = [];
  }
  if (newHead) {
    attach.next = kDo[0];
    return newHead;
  } else {
    return head;
  }
}
