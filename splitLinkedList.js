//From 725 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
function splitListToParts(root, k) {
  let result = [];
  let current = root;
  while (current) {
    let curr = current;
    current = current.next;
    curr.next = null;
    result.push(curr);
  }
  if (result.length === k) {
    return result;
  } else {
    if (result.length < k) {
      let length = k - result.length;
      for (let i = 0; i < length; i++) {
        result.push(null);
      }
    } else {
      let size = Math.floor(result.length / k);
      let remainder = result.length % k;
      let answer = [];
      let selected = null;
      let stopped = 0;
      for (let i = 1; i <= result.length; i++) {
        let currLink = result[i - 1];
        if (remainder > 0) {
          if (i % (size + 1) === 0) {
            selected.next = currLink;
            remainder--;
            if (remainder === 0) {
              stopped = i;
            }
            selected = null;
          } else {
            if (selected === null) {
              selected = currLink;
              answer.push(currLink);
            } else {
              selected.next = currLink;
              selected = selected.next;
            }
          }
        } else {
          if ((i - stopped) % size === 0) {
            if (selected === null) {
              answer.push(currLink);
            } else {
              selected.next = currLink;
              selected = null;
            }
          } else {
            if (selected === null) {
              selected = currLink;
              answer.push(selected);
            } else {
              selected.next = currLink;
              selected = selected.next;
            }
          }
        }
      }

      return answer;
    }
  }
  return result;
}
