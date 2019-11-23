//From 1026 in LeetCode

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
function maxAncestorDiff(root) {
  let max = 0;
  function recursion(branch, ancestors) {
    if (branch === null) {
      return;
    }
    let current = branch.val;
    ancestors.forEach(x => {
      max = Math.max(Math.abs(x - current), max);
    });
    let copy = ancestors.slice();
    copy.push(current);
    recursion(branch.right, copy);
    recursion(branch.left, copy);
  }
  recursion(root, []);
  return max;
}

//faster

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
function maxAncestorDiffII(root) {
  let max = 0;
  function recursion(branch, high, low) {
    if (branch === null) {
      return;
    }
    let current = branch.val;
    max = Math.max(Math.abs(high - current), Math.abs(low - current), max);
    if (current < low) {
      low = current;
    }
    if (current > high) {
      high = current;
    }
    recursion(branch.right, high, low);
    recursion(branch.left, high, low);
  }
  recursion(root, root.val, root.val);
  return max;
}
