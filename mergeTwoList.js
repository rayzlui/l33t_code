//From 21 in LeetCode

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
function mergeTwoLists(l1, l2) {
  if (l1 == null && l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let head1 = l1;
  let head2 = l2;
  let vals = [];
  while (head1 !== null || head2 !== null) {
    if (head1 !== null && head2 !== null) {
      if (head1.val > head2.val) {
        vals.push(head2.val);
        head2 = head2.next;
      } else {
        vals.push(head1.val);
        head1 = head1.next;
      }
    } else {
      if (head1) {
        vals.push(head1.val);
        head1 = head1.next;
      }
      if (head2) {
        vals.push(head2.val);
        head2 = head2.next;
      }
    }
  }

  let pop = vals.shift();
  let newList = new ListNode();
  newList.val = pop;
  let currHead = newList;
  vals.forEach(val => {
    let newNode = new ListNode();
    newNode.val = val;
    currHead.next = newNode;
    currHead = currHead.next;
  });
  return newList;
}
