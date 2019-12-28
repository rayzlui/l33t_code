//From 103 in LeetCode

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
function zigzagLevelOrder(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root, 'end'];
  let reverse = false;
  let currentArr = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === 'end') {
      if (queue[i - 1] === 'end') {
        return result;
      }
      queue.push('end');
      if (reverse) {
        currentArr = currentArr.reverse();
      }
      reverse = !reverse;
      result.push(currentArr);
      currentArr = [];
    } else {
      currentArr.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}
