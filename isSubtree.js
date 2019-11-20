//From 572 in LeetCode

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function bfs(branch) {
  let queue = [branch];
  let values = [];
  for (let i = 0; i < queue.length; i++) {
    let curr = queue[i];
    values.push(curr.val);
    if (curr.right !== null) {
      queue.push(curr.right);
    }
    if (curr.left !== null) {
      queue.push(curr.left);
    }
  }
  return values;
}
function isSubtree(s, t) {
  if (t === null) {
    return true;
  }
  if (s === null) {
    if (t === null) {
      return true;
    }
    return false;
  }
  let check = [];
  let tValues = bfs(t);
  function possibleSubs(branch) {
    if (branch === null) {
      return;
    }
    if (branch.val === t.val) {
      let values = bfs(branch);

      check.push(values);
    }

    possibleSubs(branch.left);
    possibleSubs(branch.right);
  }
  possibleSubs(s);
  return check.some(
    x =>
      x.every((y, index) => y === tValues[index]) &&
      x.length === tValues.length,
  );
}
