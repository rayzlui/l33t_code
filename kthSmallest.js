//From 230 in LeetCode

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
 * @return {number}
 */
function kthSmallest(root, k) {
  let holder = {};
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    let current = branch.val;
    if (holder[current]) {
      holder[current]++;
    } else {
      holder[current] = 1;
    }
    recursion(branch.left);
    recursion(branch.right);
  }
  recursion(root);
  let keys = Object.keys(holder);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < holder[keys[i]]; i++) {
      result.push(keys[i]);
    }
  }
  return result[k - 1];
}

//obvious, but slower

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
 * @return {number}
 */
function kthSmallestII(root, k) {
  let holder = [];
  function recursion(branch) {
    if (branch === null) {
      return;
    }
    let current = branch.val;
    holder.push(current);
    recursion(branch.left);
    recursion(branch.right);
  }
  recursion(root);
  holder = holder.sort((x, y) => x - y);
  return holder[k - 1];
}
