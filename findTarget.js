//From 653 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k) {
  let nums = [];
  function getNums(tree) {
    nums.push(tree.val);
    if (tree.left) {
      let leftBranch = tree.left;
      getNums(leftBranch);
    }
    if (tree.right) {
      let rightBranch = tree.right;
      getNums(rightBranch);
    }
  }
  getNums(root);
  return nums.some((x, index) => {
    let copy = nums.slice();
    copy.splice(index, 1);
    let find = k - x;
    return copy.includes(find);
  });
}
