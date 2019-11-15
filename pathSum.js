//From 437 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum(root, sum) {
  let count = 0;
  function recursion(branch, sums) {
    if (branch === null) {
      return;
    }
    let currVal = branch.val / 1;
    if (currVal === sum) {
      count++;
    }

    sums = sums.map(val => {
      let add = currVal + val;
      if (add === sum) {
        count++;
      }
      return add;
    });
    sums.push(currVal);
    if (branch.right) {
      recursion(branch.right, sums.slice());
    }
    if (branch.left) {
      recursion(branch.left, sums);
    }
  }
  recursion(root, []);
  return count;
}
