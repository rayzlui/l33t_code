//From 590 in LeetCode

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
function postorder(root) {
  if (root === null) {
    return [];
  }
  let queue = [root];
  let hold = [];
  let result = [];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    if (current === 'break') {
      result.push(hold[hold.length - 1]);
      hold.pop();
    } else if (current.children.length === 0) {
      result.push(current.val);
    } else if (current.children.length > 0) {
      queue.splice(i + 1, 0, ...current.children, 'break');
      hold.push(current.val);
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
function postorder(tree) {
  if (tree === null) {
    return [];
  }
  let result = [];
  function recursion(root) {
    if (root.children.length === 0) {
      result.push(root.val);
      return;
    }
    for (let i = 0; i < root.children.length; i++) {
      recursion(root.children[i]);
    }
    result.push(root.val);
  }
  recursion(tree);
  return result;
};
