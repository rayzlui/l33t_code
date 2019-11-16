//From 501 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
  if (root === null) {
    return [];
  }
  let holder = {};
  function recursion(branch) {
    let val = branch.val;
    if (holder[val]) {
      holder[val]++;
    } else {
      holder[val] = 1;
    }
    if (branch.left === null && branch.right === null) {
      return;
    }
    if (branch.left) {
      recursion(branch.left);
    }

    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root);
  let keys = Object.keys(holder);
  keys = keys.sort((x, y) => holder[y] - holder[x]);
  return keys.filter(x => holder[x] === holder[keys[0]]);
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
 * @return {number[]}
 */
function findModeII(root) {
  if (root === null) {
    return [];
  }
  let holder = {};
  function recursion(branch) {
    let val = branch.val;
    if (holder[val]) {
      holder[val]++;
    } else {
      holder[val] = 1;
    }
    if (branch.left === null && branch.right === null) {
      return;
    }
    if (branch.left) {
      recursion(branch.left);
    }

    if (branch.right) {
      recursion(branch.right);
    }
  }
  recursion(root);
  let keys = Object.keys(holder);
  let max = Math.max(...Object.values(holder));
  return keys.filter(x => holder[x] === max);
}
