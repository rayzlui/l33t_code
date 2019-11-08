//From 589 in LeetCode

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  if (root === null) {
    return [];
  }
  let queue = [root];
  let result = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    result.push(current.val);
    if (current.children.length > 0) {
      queue.splice(i + 1, 0, ...current.children);
    }
  }
  return result;
};

//recursion

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  if (root === null) {
    return [];
  }
  let queue = [root];
  let result = [];
  function recursion(branch) {
    result.push(branch.val);
    if (branch.children.length > 0) {
      for (let i = 0; i < branch.children.length; i++) {
        recursion(branch.children[i]);
      }
    }
  }
  recursion(root);
  return result;
};
