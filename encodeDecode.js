//From 449 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (root === null) {
    return '';
  }
  function recursion(branch, depth) {
    if (branch.left === null && branch.right === null) {
      return branch.val.toString();
    }
    let left = '';
    if (branch.left) {
      left = `l${depth} ${recursion(branch.left, depth + 1)}l${depth} `;
    }
    let right = '';
    if (branch.right) {
      right = `r${depth} ${recursion(branch.right, depth + 1)}r${depth} `;
    }
    return branch.val.toString() + left + right;
  }
  return recursion(root, 0);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data, depth) {
  if (data.length === 0) {
    return null;
  }
  if (data.length === 1) {
    return new TreeNode(data);
  }
  let root = new TreeNode();
  //break string into array
  function recursion(root, array, depth) {
    if (array.length === 0) {
      return null;
    }
    if (array.indexOf('r') === -1 && array.indexOf('l') === -1) {
      root.val = array;
      return root;
    }
    let start = array.indexOf(`l${depth} `);
    if (start === -1) {
      start = array.indexOf(`r${depth} `);
    }
    let rootVal = array.substring(0, start);
    root.val = rootVal;
    array = array.substring(start);
    let index = array.indexOf(`r${depth} `);
    let right = '';
    if (index !== -1) {
      right = array.substring(index);
    }
    let left = array.substring(0, index);
    if (index === -1) {
      left = array;
    }
    if (index === 0) {
      left = '';
    }
    let newLeft = new TreeNode();
    let newRight = new TreeNode();

    let depthLength = depth.toString().length;
    right = right.slice(2 + depthLength, right.length - 2 - depthLength);
    left = left.slice(2 + depthLength, left.length - 2 - depthLength);
    root.left = recursion(newLeft, left, depth + 1);
    root.right = recursion(newRight, right, depth + 1);
    return root;
  }
  return recursion(root, data, 0);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
