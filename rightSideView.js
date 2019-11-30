//From 199 in LeetCode

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
function rightSideView(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root, 'end'];
  let pushedRight = false;
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === 'end') {
      if (queue[i - 1] === 'end') {
        return result;
      }
      pushedRight = false;
      queue.push('end');
    } else {
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (!pushedRight) {
        result.push(current.val);
        pushedRight = true;
      }
    }
  }
  return result;
}
