//From 445 in LeetCode

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
function addTwoNumber(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let num1 = [];
  let num2 = [];
  while (current1) {
    num1.push(current1.val);
    current1 = current1.next;
  }
  while (current2) {
    num2.push(current2.val);
    current2 = current2.next;
  }
  num1 = num1.reverse();
  num2 = num2.reverse();
  let sizes = num1.length > num2.length ? [num1, num2] : [num2, num1];
  let longer = sizes[0];
  let shorter = sizes[1];
  let sum = [];
  let carry = false;
  for (let i = 0; i < shorter.length; i++) {
    let curr1 = longer[i];
    let curr2 = shorter[i];
    let add = curr1 + curr2;
    if (carry) {
      add++;
    }
    if (add > 9) {
      carry = true;
      sum.push(add % 10);
    } else {
      sum.push(add);
      carry = false;
    }
  }
  let extra = longer.slice(sum.length);
  if (carry) {
    if (extra[0] || extra[0] === 0) {
      extra[0]++;
      let i = 0;
      let num = extra[i];
      while (num > 9) {
        extra[i] = num % 10;
        if (extra[i + 1] || extra[i + 1] === 0) {
          extra[i + 1]++;
        } else {
          extra[i + 1] = 1;
        }
        i++;
        num = extra[i];
      }
    } else {
      extra.push(1);
    }
  }
  extra.forEach(x => sum.push(x));
  sum.reverse();
  let head = new ListNode(sum[0] / 1);
  let current = head;
  for (let i = 1; i < sum.length; i++) {
    current.next = new ListNode(sum[i] / 1);
    current = current.next;
  }
  return head;
}