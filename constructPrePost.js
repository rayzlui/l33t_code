//From 889 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
function constructFromPrePost(pre, post) {
  //we travel on pre until we hit the first "set" of post (which means we've hit the lowest leftest leaves branch)
  //
  let root = new TreeNode(pre[0]);
  function construct(branch, pre, post) {
    if (pre.length === 0) {
      return;
    }
    let leftValue = pre.shift();
    let leftBranch = leftValue ? new TreeNode(leftValue) : null;
    let index = post.indexOf(leftValue);
    let leftPreSource = pre.splice(0, index);
    let leftPostSource = post.splice(0, index + 1);
    leftPostSource.pop();
    let rightValue = pre.shift();
    let rightPreSource = pre;
    post.pop();
    let rightPostSource = post;
    let rightBranch = rightValue ? new TreeNode(rightValue) : null;
    branch.left = leftBranch;
    branch.right = rightBranch;
    construct(leftBranch, leftPreSource, leftPostSource);
    construct(rightBranch, rightPreSource, rightPostSource);
  }
  pre.shift();
  post.pop();
  construct(root, pre, post);
  return root;
}
