//From 23 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let holder = lists.reduce((acc, curr, index) => {
    if (curr) {
      acc[index] = curr;
    }
    return acc;
  }, {});
  let newList = null;
  let start = null;
  let keys = Object.keys(holder);
  let skips = {};
  while (Object.keys(skips).length !== keys.length) {
    let lowest = keys.reduce((acc, curr) => {
      if (skips[curr] === undefined) {
        if (acc === undefined) {
          if (holder[curr]) {
            acc = curr;
          }
          return acc;
        }
        if (holder[curr].val < holder[acc].val) {
          acc = curr;
        }
      }
      return acc;
    }, undefined);
    if (newList) {
      newList.next = holder[lowest];
      newList = newList.next;
    } else {
      newList = holder[lowest];
      start = newList;
    }
    holder[lowest] = holder[lowest].next;
    if (holder[lowest] === null) {
      delete holder[lowest];
      skips[lowest] = true;
    }
  }
  return start;
}