//From 109 in LeetCode

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  if (head === null) {
    return null;
  }
  let vals = [];
  let current = head;
  while (current) {
    vals.push(current.val);
    current = current.next;
  }
  let root = new TreeNode();
  function recursion(source, branch) {
    if (source.length === 1) {
      branch.val = source[0];
      return branch;
    }
    if (source.length === 0) {
      return null;
    }
    let mid = Math.floor(source.length / 2);
    let right = source.splice(mid);
    let left = source;
    let val = right.shift();
    branch.val = val;
    let leftBranch = new TreeNode();
    let rightBranch = new TreeNode();

    leftBranch = recursion(left, leftBranch);
    rightBranch = recursion(right, rightBranch);
    branch.left = leftBranch;
    branch.right = rightBranch;
    return branch;
  }
  recursion(vals, root);
  return root;
}
