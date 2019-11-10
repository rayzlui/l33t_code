//From 993 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function recursion(branch, count, check, sib) {
  count = count + 1;
  if (branch.val === check) {
    return count;
  }
  if (branch.right) {
    let tryR = recursion(branch.right, count, check, sib);
    if (tryR) {
      if (branch.left) {
        if (branch.left.val !== sib) {
          return tryR;
        }
      } else {
        return tryR;
      }
    }
  }
  if (branch.left) {
    let tryL = recursion(branch.left, count, check, sib);
    if (tryL) {
      if (branch.right) {
        if (branch.right.val !== sib) {
          return tryL;
        }
      } else {
        return tryL;
      }
    }
  }
  return null;
}
function isCousins(root, x, y) {
  let forX = recursion(root, 0, x, y);
  let forY = recursion(root, 0, y, x);
  return forX ? forX === forY : false;
};
