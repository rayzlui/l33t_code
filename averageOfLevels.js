//From 637 in LeetCode

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
function averageOfLevels(root) {
  let result = [];
  let queue = [root, 'breaker'];
  let levels = [];
  for (let i = 0; i < queue.length; i++) {
    let curr = queue[i];
    if (curr === 'breaker') {
      if (queue[i - 1] === 'breaker') {
        break;
      }
      let average = levels.reduce((x, y) => x + y, 0) / levels.length;
      result.push(average);
      levels = [];
      queue.push('breaker');
    } else {
      if (curr !== null) {
        levels.push(curr.val);
        if (curr.right) {
          queue.push(curr.right);
        }
        if (curr.left) {
          queue.push(curr.left);
        }
      }
    }
  }
  return result;
};

//no reduce

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
function averageOfLevels(root) {
  let result = [];
  let queue = [root, 'breaker'];
  let levels = 0;
  let divisor = 0;
  for (let i = 0; i < queue.length; i++) {
    let curr = queue[i];
    if (curr === 'breaker') {
      if (queue[i - 1] === 'breaker') {
        break;
      }
      let average = levels / divisor;
      result.push(average);
      levels = 0;
      divisor = 0;
      queue.push('breaker');
    } else {
      if (curr !== null) {
        levels += curr.val;
        divisor++;
        if (curr.right) {
          queue.push(curr.right);
        }
        if (curr.left) {
          queue.push(curr.left);
        }
      }
    }
  }
  return result;
};
