//From 559 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  let max = 0;
  function recursion(branch, count) {
    count = count + 1;
    if (branch.children.length === 0) {
      max = Math.max(max, count);
      return;
    } else {
      let branches = branch.children;

      for (let i = 0; i < branches.length; i++) {
        recursion(branches[i], count);
      }
    }
  }
  recursion(root, 0);
  return max;
}
