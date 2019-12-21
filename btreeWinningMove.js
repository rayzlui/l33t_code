//From 1145 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
function btreeGameWinningMove(root, n, x) {
  //choose the parent node that either blocks them from going to another branch or prevents them from going up to the rest of the tree
  //essentially the only way this is false is if the tree is balanced and they choose the root. or they choose the root of the larger branch.
  //this is probably best to do with dfs
  let free = [];
  let reds = [];
  function recursion(branch, isRed) {
    if (branch === null) {
      return;
    }
    if (branch.val === x) {
      isRed = true;
    }
    if (isRed) {
      reds.push(branch);
    } else {
      free.push(branch);
    }

    recursion(branch.left, isRed);
    recursion(branch.right, isRed);
  }
  recursion(root, false);
  if (free.length > reds.length) {
    return true;
  } else {
    let redSpot = reds[0];
    let redLeft = redSpot.left;
    let redRight = redSpot.right;
    let left = [];
    let right = [];
    function getSize(branch, side) {
      if (branch === null) {
        return;
      }
      if (side === left) {
        left.push(branch.val);
      } else {
        right.push(branch.val);
      }
      getSize(branch.left, side);
      getSize(branch.right, side);
    }
    getSize(redLeft, left);
    getSize(redRight, right);
    return (
      left.length > right.length + free.length ||
      right.length > left.length + free.length
    );
  }
}
