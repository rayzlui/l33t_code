//From 429 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root, null];
  let level = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === null) {
      if (queue[i - 1] === null) {
        break;
      }
      result.push(level);
      level = [];
      queue.push(null);
    } else {
      level.push(current.val);
      queue.push(...current.children);
    }
  }
  return result;
}
