//From 958 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isCompleteTree(root) {
  let queue = [root];
  let seenNull = false;
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === null) {
      seenNull = true;
    } else {
      if (seenNull) {
        return false;
      } else {
        queue.push(current.left, current.right);
      }
    }
  }
  return true;
}
