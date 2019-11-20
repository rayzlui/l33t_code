//From 1161 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
  let queue = [root, 'end'];
  let sum = 0;
  let level = 1;
  let result = {};
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current !== 'end') {
      sum += current.val;
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
    } else {
      if (queue[i - 1] === 'end') {
        break;
      }
      result[level] = sum;
      sum = 0;
      level++;
      queue.push('end');
    }
  }
  let keys = Object.keys(result);
  keys.sort((x, y) => result[y] - result[x]);
  return keys[0];
}
