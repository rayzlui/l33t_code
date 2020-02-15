//From 106 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder1, postorder1) {
  if (inorder1.length === 0) {
    return null;
  }
  let root = new TreeNode();
  function recursion(branch, inorder, postorder) {
    if (inorder.length === 0 && postorder.length === 0) {
      branch = null;
      return branch;
    }
    let branchRoot = postorder.pop();
    branch.val = branchRoot;
    let index = inorder.indexOf(branchRoot);
    let rightInorder = inorder.splice(index);
    rightInorder.shift();
    let leftInorder = inorder;
    let rightIndex;

    if (rightInorder.length > 0) {
      rightIndex = rightInorder.reduce((acc, curr) => {
        acc = Math.min(acc, postorder.indexOf(curr));
        return acc;
      }, Infinity);
      let rightPost =
        leftInorder.length > 0 ? postorder.splice(rightIndex) : postorder;
      let newRight = new TreeNode();
      let rightBranch = recursion(newRight, rightInorder, rightPost);
      if (rightBranch) {
        branch.right = rightBranch;
      }
    }
    if (leftInorder.length > 0) {
      rightIndex = rightIndex ? rightIndex : leftInorder.length;
      let leftPost = postorder.splice(0, rightIndex);
      let newLeft = new TreeNode();
      let leftBranch = recursion(newLeft, leftInorder, leftPost);
      if (leftBranch) {
        branch.left = leftBranch;
      }
    }

    return branch;
  }

  recursion(root, inorder1, postorder1);
  return root;
}
