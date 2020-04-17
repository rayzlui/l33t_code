//From 92 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
  let preM = null;
  let postN = null;
  let current = head;
  let i = 1;
  let reverse = [];
  while (current) {
    if (i === m - 1) {
      preM = current;
    }
    if (i === n + 1) {
      postN = current;
    }
    if (i >= m && i <= n) {
      reverse.push(current);
    }
    i++;
    current = current.next;
  }
  let end = reverse.reverse().reduce((acc, curr) => {
    if (acc) {
      acc.next = curr;
    } else {
      acc = curr;
    }
    acc = acc.next;
    return acc;
  });
  end.next = null;
  if (preM && postN) {
    preM.next = reverse[0];
    end.next = postN;
  } else if (preM) {
    preM.next = reverse[0];
  } else if (postN) {
    end.next = postN;
    return reverse[0];
  } else {
    return reverse[0];
  }
  return head;
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetweenII(head, m, n) {
  let preM = null;
  let postN = null;
  let current = head;
  let i = 1;
  let reverse = null;
  let last = null;
  while (current) {
    if (i === m - 1) {
      preM = current;
    }
    if (i === n + 1) {
      postN = current;
    }
    let pre = current;
    current = current.next;
    if (i >= m && i <= n) {
      if (reverse) {
        pre.next = reverse;
        reverse = pre;
      } else {
        reverse = pre;
        last = pre;
      }
    }
    i++;
  }
  last.next = null;
  if (preM && postN) {
    last.next = postN;
    preM.next = reverse;
    return head;
  } else if (preM) {
    preM.next = reverse;
    return head;
  } else if (postN) {
    last.next = postN;
    return reverse;
  } else {
    return reverse;
  }
}