//From 83 in LeetCode

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
function deleteDuplicates(list) {
  if (list === null) {
    return list;
  }
  let head = list;
  while (head.next) {
    let currHead = head.val;
    let nextHead = head.next;
    while (currHead === nextHead.val) {
      nextHead = nextHead.next;
      head.next = nextHead;
      if (nextHead === null) {
        break;
      }
    }
    if (nextHead === null) {
      break;
    }
    head = nextHead;
  }
  return list;
}
