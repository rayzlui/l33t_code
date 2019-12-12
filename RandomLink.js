//From 382 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    let list = [];
    let current = head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    this.list = list;
  }
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let rand = Math.floor(Math.random() * this.list.length);
  return this.list[rand];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
