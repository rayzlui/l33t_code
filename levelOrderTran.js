//From 102 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root, 'end'];
  let row = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];

    if (current === 'end') {
      if (queue[i - 1] === 'end') {
        return result;
      }
      result.push(row);
      row = [];
      queue.push('end');
    } else {
      row.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return result;
}
