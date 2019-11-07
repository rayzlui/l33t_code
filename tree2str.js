//From 606 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
function tree2str(t) {
  if (t === null) {
    return '';
  }
  function recursion(tree) {
    if (tree === null) {
      return null;
    }
    let leftBranch = tree.left;
    let rightBranch = tree.right;
    let buildLeft = recursion(leftBranch);
    let buildRight = recursion(rightBranch);
    if (buildLeft === null) {
      buildLeft = buildRight === null ? '' : '()';
    }
    buildRight = buildRight ? buildRight : '';
    if (tree.val === null) {
      return '';
    }
    return `(${tree.val}${buildLeft}${buildRight})`;
  }

  let right = recursion(t.right);
  let left = recursion(t.left);
  if (left === null) {
    left = right === null ? '' : '()';
  }
  if (right === null) {
    right = '';
  }
  return t.val + left + right;
}
