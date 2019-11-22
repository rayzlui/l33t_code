//From 515 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let maxRow = -Infinity;
  let queue = [root, null];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === null) {
      if (queue[i - 1] === null) {
        break;
      }
      result.push(maxRow);
      maxRow = -Infinity;
      queue.push(null);
    } else {
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
      maxRow = Math.max(current.val, maxRow);
    }
  }
  return result;
}
